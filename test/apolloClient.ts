import pkg from "@apollo/client";
import { ComposeClient } from "@composedb/client";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { definition } from "../src/composites/daoProfile_runtime.js";
import constants from "../src/constants/index.js";
const { ApolloClient, ApolloLink, InMemoryCache, Observable } = pkg;

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

void authenticateDID(constants.seed).then((did) => {
  did && compose.setDID(did);
});

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
const client = new ApolloClient({ cache: new InMemoryCache(), link });
console.log({ client });
export default client;
