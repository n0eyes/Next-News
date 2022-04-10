import { useQuery } from "react-query";
import { fetchComments } from "../api/fetchComments";
import { fetchFeeds } from "../api/fetchFeeds";

export const useFetchFeeds = (category = "news", page) =>
  useQuery(category, () => fetchFeeds(category, page));

export const useFetchComments = (id) =>
  useQuery(["ask", id], () => fetchComments(id));
