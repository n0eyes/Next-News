import React from "react";
import Head from "next/dist/shared/lib/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { category } = router.query;
  const queryClient = React.useRef(new QueryClient());
  return (
    <>
      <Head>
        <title>Hacker News{category ? ` | ${category[0]}` : null}</title>
      </Head>
      <Script></Script>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
