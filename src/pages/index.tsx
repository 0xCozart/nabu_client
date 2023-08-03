import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
      </body>
    </>
  );
};

export default Home;
