// import pkg from "@apollo/client";
// const { gql } = pkg;

import { ethers } from "ethers";

export const CeramicAuthWindowProvider = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();
  return { provider, signer };
};
