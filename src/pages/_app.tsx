import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from "@apollo/client";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import composeApolloClient from "~/api/composedb/composeApolloClient";
import Layout from "~/components/layout";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

  composeApolloClient()
    .then((client) => (apolloClient = client))
    .catch((err) => console.error(err));

  if (!apolloClient) {
    throw Error("error connecting to composedb");
  }

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Nabu</title>
        <meta name="description" content="DAO social tooling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
