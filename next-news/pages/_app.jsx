import Head from "next/dist/shared/lib/head";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { category } = router.query;
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Hacker News{category ? ` | ${category[0]}` : null}</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
