import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from "@apollo/client";
import { type AppType } from "next/dist/shared/lib/utils";
import composeApolloClient from "~/api/composedb/composeApolloClient";
import Layout from "~/components/layout";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  let composeClient: ApolloClient<NormalizedCacheObject> | undefined;
  void composeApolloClient().then((client) => {
    composeClient = client;
  });

  if (!composeClient) throw Error("error connecting to composedb");

  return (
    <ApolloProvider client={composeClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
