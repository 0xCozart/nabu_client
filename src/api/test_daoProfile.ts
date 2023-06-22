import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import client from "./client";
import constants from "../constants";
import { getResolver } from "key-did-resolver";
import pkg from "@apollo/client";
const { gql } = pkg;

const test = async () => {
  // auth did
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
  const did = await authenticateDID(constants.seed);
  if (!did) throw new Error("did is undefined");

  await client
    .mutate({
      mutation: gql`
        mutation createNabuProfileAlpha($i: CreateNabuProfileAlphaInput) {
          CreateNabuProfileAlpha(input: $i) {
            document {
              id
              userDID
              displayName
              accountCreated
            }
          }
        }
      `,
      variables: {
        content: {
          userDID: did,
          displayName: "testName1",
          accountCreated: new Date(),
        },
      },
    })
    .then((value) => {
      console.log({ value });
    });
};

void test();
