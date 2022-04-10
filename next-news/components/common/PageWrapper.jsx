import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkFirstPage, checkLastPage } from "../../utils/checkPage";
import styled from "styled-components";
import Page from "./Page";
import { useFetchFeeds } from "../../query/feedsQuery";

function PageWrapper() {
  const [pageIndex, setPageIndex] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const router = useRouter();
  const { category } = router.query;
  const { data, isLoading, error } = useFetchFeeds(category, pageIndex);

  const pagination = (i) => setPageIndex(pageIndex + i);

  useEffect(() => {
    setPageIndex(1);
  }, [category]);

  useEffect(() => {
    setIsFirstPage(checkFirstPage(pageIndex));
    setIsLastPage(checkLastPage(!category ? "news" : category, pageIndex));
  }, [pageIndex]);

  if (error) return <StyledState>{error.message}</StyledState>;
  if (isLoading || !data) return <StyledState>Loading...</StyledState>;
  return (
    <>
      <Page feeds={data} pageIndex={pageIndex} />
      {!isFirstPage && (
        <StyledPaginationButton onClick={() => pagination(-1)}>
          Before
        </StyledPaginationButton>
      )}
      {!isLastPage && (
        <StyledPaginationButton onClick={() => pagination(1)}>
          More
        </StyledPaginationButton>
      )}
      {isLastPage && (
        <StyledAnnouncement>마지막 페이지 입니다.</StyledAnnouncement>
      )}
      <CachingFeed>
        <Page pageIndex={pageIndex + 1} category={category} />
      </CachingFeed>
    </>
  );
}
const CachingFeed = styled.div`
  display: none;
`;
const StyledPaginationButton = styled.button`
  margin-left: 2rem;
  margin-top: 0.6rem;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  color: #828282;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const StyledAnnouncement = styled.div`
  margin-left: 2rem;
  margin-top: 0.6rem;
  font-weight: bold;
`;
const StyledState = styled.div`
  padding: 0.6rem 1.2rem 0 2.3rem;
`;
export default PageWrapper;
