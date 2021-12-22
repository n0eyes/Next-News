import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Page from "../components/common/Page";
import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/dist/shared/lib/head";
import checkLastPage from "../utils/checkLastPage";

export default function Main() {
  const [pageIndex, setPageIndex] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const router = useRouter();
  const { category } = router.query;

  const pagination = () => {
    setPageIndex(pageIndex + 1);
  };

  useEffect(() => {
    setPageIndex(1);
  }, [category, setPageIndex]);

  useEffect(() => {
    setIsLastPage(checkLastPage(!category ? "news" : category, pageIndex));
  }, [category, pageIndex, setIsLastPage]);

  if (category?.length > 1) return <div>잘못된 접근입니다.</div>;
  return (
    <>
      <Head>
        <title>Hacker News{category ? ` | ${category[0]}` : null}</title>
      </Head>
      <Layout>
        <Page pageIndex={pageIndex} category={category} />
        <StyledMoreButton
          onClick={pagination}
          disabled={isLastPage}
          isLast={isLastPage}
        >
          More
        </StyledMoreButton>
        {isLastPage && (
          <StyledAnnouncement>마지막 페이지 입니다.</StyledAnnouncement>
        )}
        <CachingFeed>
          <Page pageIndex={pageIndex + 1} category={category} />
        </CachingFeed>
      </Layout>
    </>
  );
}
const CachingFeed = styled.div`
  display: none;
`;
const StyledMoreButton = styled.button`
  margin-left: 30px;
  margin-top: 10px;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  color: #828282;
  cursor: pointer;
  &:hover {
    ${({ isLast }) => (isLast ? null : `color: black`)}
  }
`;
const StyledAnnouncement = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  font-weight: bold;
`;
