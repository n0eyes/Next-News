import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchFeeds } from "../api/fetchFeeds";
import PageWrapper from "../components/common/PageWrapper";
import { useFetchFeeds } from "../query/feedsQuery";

export default function Index() {
  return <PageWrapper />;
}
