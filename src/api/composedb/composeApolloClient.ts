// import pkg from "@apollo/client";
// const { gql } = pkg;
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";

import { ComposeClient } from "@composedb/client";
import { DIDSession } from "did-session";
import { definition } from "~/api/composedb/runtime";
import { env } from "~/constants";
import { ethers } from "ethers";

export const ethWindowProvider = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();
  return { provider, signer };
};

const composeApolloClient = async () => {
  try {
    // Prompt injected provider (metamask or another client wallet with injected provider) for connection to Nabu
    const { provider } = await ethWindowProvider();
    const [address] = await provider.getSigner().getAddress();
    if (!address) throw Error("no signer address found");

    // Ceramic authentation pipeline
    const accountId = await getAccountId(provider, address);
    const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);

    const compose = new ComposeClient({
      ceramic: env.NEXT_PUBLIC_CERAMIC_URL || "http://localhost:7007",
      definition,
    });

    const session = await DIDSession.authorize(authMethod, {
      resources: compose.resources,
    });

    compose.setDID(session.did);

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

    return new ApolloClient({ cache: new InMemoryCache(), link });
  } catch (error) {
    console.error("compose/apollo auth error: ", error);
  }
};

export default composeApolloClient;
