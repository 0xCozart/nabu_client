// import pkg from "@apollo/client";
// const { gql } = pkg;

import { ethers } from "ethers";

export const CeramicAuthLava = async () => {
  // eslint-disable-next-line
  const ethProvider = await new ethers.providers.Web3Provider(window.ethereum);
  // console.log({ ethProvider });
  const signer = ethProvider.getSigner();
  console.log({ signer: signer.getAddress() });
};
void CeramicAuthLava();
// export const CeramicAuth = async () => {
// eslint-disable-next-line
// const lavasdk = await new sdk.LavaSDK({
//   badge: {
//     badgeServerAddress: env.NEXT_PUBLIC_LAVA_BADGE_ADDRESS,
//     projectId: env.NEXT_PUBLIC_LAVA_PROJECT_ID,
//   },
//   chainID: "ETH1",
//   rpcInterface: "jsonrpc",
//   geolocation: "2",
// });

// const addresses = await lavasdk.sendRelay({
//   method: "eth_accounts",
//   params: [],
// });

// const accountID = await getAccountId(ethProvider, addresses[0]);
// console.log({ addresses });

//   const authenticateDID = async (seed: string) => {
//     try {
//       const Uint8ArraySeed = seedToUint8Array(seed);
//       const provider = new Ed25519Provider(Uint8ArraySeed);
//       const did = new DID({ provider, resolver: getResolver() });
//       await did.authenticate();
//       return did;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const did = await authenticateDID(constants.seed);
//   if (!did) throw new Error("did is undefined");
//   console.log({ id: did.id });
//   return did;
// await client
//   .mutate({
//     mutation: gql`
//       mutation createNabuProfileAlpha($i: CreateNabuProfileAlphaInput!) {
//         createNabuProfileAlpha(input: $i) {
//           document {
//             id
//             userDID {
//               id
//             }
//             displayName
//             accountCreated
//           }
//         }
//       }
//     `,
//     variables: {
//       i: {
//         content: {
//           userDID: "did:key:z6MkjfFcCdV5ph6i4BUSrb2gsq6ZuhEr7Vpff2TioLUYVSiD",
//           displayName: "testName1",
//           accountCreated: new Date().toISOString(),
//         },
//       },
//     },
//   })
//   .then((value) => {
//     console.log({ value });
//   });
// };

// void CeramicAuth();
