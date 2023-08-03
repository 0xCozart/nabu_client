import { ComposeClient } from "@composedb/client";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { definition } from "./runtime";
import { env } from "../../constants";
import { getResolver } from "key-did-resolver";
import pkg from "@apollo/client";
import { readFileSync } from "fs";
const { ApolloClient, ApolloLink, InMemoryCache, Observable } = pkg;

const typeDefs = readFileSync("src/schemas/daoProfileSchema.graphql", {
  encoding: "utf-8",
});

const compose = new ComposeClient({
  ceramic: "http://localhost:7007",
  definition,
});

const seedToUint8Array = (seed: string) => {
  const buffer = Buffer.from(seed, "hex");
  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};

const authenticateDID = async (seed: string) => {
  try {
    const Uint8ArraySeed = seedToUint8Array(seed);
    const provider = new Ed25519Provider(Uint8ArraySeed);
    const did = new DID({ provider, resolver: getResolver() });
    await did.authenticate();
    return did;
  } catch (error) {
    console.log(error);
  }
};

//

const did = await authenticateDID(env.NEXT_PUBLIC_ED25519_SEED);
if (did) compose.setDID(did);

// Create custom ApolloLink using ComposeClient instance to execute operations
const link = new ApolloLink((operation) => {
  return new Observable((observer) => {
    compose.execute(operation.query, operation.variables).then(
      (result) => {
        observer.next(result);
        observer.complete();
      },
      (error) => {
        observer.error(error);
      }
    );
  });
});

// Use ApolloLink instance in ApolloClient config
const client = new ApolloClient({ cache: new InMemoryCache(), link, typeDefs });
export default client;
