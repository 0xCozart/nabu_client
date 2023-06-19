import * as dotenv from "dotenv";

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";

import { ComposeClient } from "@composedb/client";
import { definition } from "../src/composites/daoProfile_runtime.js";

import { DID } from "dids";
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from "key-did-resolver";
// Path to compiled composite

dotenv.config({ path: __dirname + "../.env" });


const compose = new ComposeClient({
  ceramic: "http://localhost:7007",
  definition,
});

const authenticateDID = async (didKey: string) => {
  const seed: string[] = process.env.ED25519_SEED?.split(",")
  const arr = new Uint8Array(32).map((val,idx)=> {
    val = seed[idx]
  })
  const provider = new Ed25519Provider()
  const did = new DID({ resolver: getResolver() });
  return await did.resolve(didKey);
};


(async() => compose.setDID((await resolveDID(process.env.NEXT_PUBLIC_DID)).didDocument);)();

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
