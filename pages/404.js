import Head from "next/head";
// import { PrismicLink } from "@prismicio/react";

import { Layout } from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div>
        <h1>Page Not Found</h1>
        <p>
          {/* <PrismicLink href="/">Go to the homepage &rarr;</PrismicLink> */}
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
