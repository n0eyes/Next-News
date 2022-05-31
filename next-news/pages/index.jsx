import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchFeeds } from "../api/fetchFeeds";
import PageWrapper from "../components/common/PageWrapper";
import { useFetchFeeds } from "../query/feedsQuery";

export default function Index({ data }) {
  console.log(data);
  return <PageWrapper />;
}

export async function getStaticProps(context) {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery("news", fetchFeeds("news", 1));
  const data = await fetchFeeds("news", 1);
  // console.log(isLoading);/
  return {
    props: {
      data,
    },
  };
}
