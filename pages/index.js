import React from "react";
import Head from "next/head";
// import * as prismicH from "@prismicio/helpers";
// import { createClient } from "../prismicio";

import { Layout } from "../components/Layout";
import { SetupRepo } from "../components/SetupRepo";

/**
 * Homepage component
 */
const Home = ({ blogHome, posts, driverProfiles }) => {
  if (!blogHome) {
    // Message when the Prismic repository has not been setup yet.
    return <SetupRepo />;
  }

  return (
    <Layout>
      <Head>
        {/* <title>{prismicH.asText(blogHome.data.headline)}</title> */}
      </Head>
    </Layout>
  );
};

export async function getStaticProps(context) {
  
  return {
    props: {
    },
  };
}

export default Home;
