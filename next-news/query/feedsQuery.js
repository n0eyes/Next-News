import { useQuery, useQueryClient } from "react-query";
import { fetchComments } from "../api/fetchComments";
import { fetchFeeds } from "../api/fetchFeeds";

function useFeedsQuery() {
  const queryClient = useQueryClient();

  const useFetchFeeds = (category = "news", page, options) =>
    useQuery([category, page], () => fetchFeeds(category, page), options);

  const usePreFetchFeeds = (category = "news", page) =>
    queryClient.prefetchQuery([category, page + 1], () =>
      fetchFeeds(category, page + 1)
    );

  const useFetchComments = (id) =>
    useQuery(["ask", id], () => fetchComments(id));

  return { useFetchFeeds, usePreFetchFeeds, useFetchComments };
}

export default useFeedsQuery;
