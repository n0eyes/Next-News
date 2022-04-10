import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
import FeedBody from "../components/common/item/FeedBody";
import FeedComment from "../components/common/item/FeedComment";
import styled from "styled-components";
import { useFetchComments } from "../query/feedsQuery";
export default function item() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useFetchComments(id);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const alignedComments = [];

    const alignComments = (data) => {
      data.comments.map((comment) => {
        comment.content.length > 0 &&
          comment.content !== "[deleted]" &&
          alignedComments.push({ parent: data.id, comment });
        alignComments(comment);
      });
    };
    data && alignComments(data);
    setComments(alignedComments);
  }, [data]);

  const renderComments = () =>
    comments.map((info) => <FeedComment key={info.comment.id} info={info} />);

  return (
    <Layout>
      <StyledItem>
        {error ? (
          <div>{error.message}</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <FeedBody feed={data} />
            <StyledCommentsWrapper>{renderComments()}</StyledCommentsWrapper>
          </>
        )}
      </StyledItem>
    </Layout>
  );
}

const StyledItem = styled.div`
  width: 100%;
  padding: 0.6rem 1.2rem 0 2.3rem;

  @media (max-width: 360px) {
    padding: 0.6rem 0.6rem 0px 0.6rem;
  }
`;
const StyledCommentsWrapper = styled.div`
  width: 100%;
  border-top: 2px solid #ff6600;
  margin-top: 3.1rem;
  padding-top: 1rem;
  p {
  }
`;
const StyledState = styled.div`
  padding: 0.6rem 1.2rem 0 2.3rem;
`;
