import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Page from "../components/common/Page";
import styled from "styled-components";
import { useRouter } from "next/router";
export default function Main() {
  const [pageIndex, setPageIndex] = useState(1);
  const router = useRouter();
  const query = router.query;

  const pagination = () => {
    setPageIndex(pageIndex + 1);
  };

  useEffect(() => {
    setPageIndex(1);
  }, [query, setPageIndex]);

  return (
    <Layout>
      <Page pageIndex={pageIndex} query={query} />
      <StyledMoreButton onClick={pagination}>More</StyledMoreButton>
      <CachingFeed>
        <Page pageIndex={pageIndex + 1} query={query} />
      </CachingFeed>
    </Layout>
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
    color: black;
  }
`;
