import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getFeedComments from "./api/getFeedComments";
import Layout from "../components/common/Layout";
import FeedBody from "../components/common/item/FeedBody";
import FeedComment from "../components/common/item/FeedComment";
import styled from "styled-components";
export default function item() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = getFeedComments(id);
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

  if (error) return <div>에러 발생</div>;
  if (!data) return <div>로딩 중</div>;
  return (
    <Layout>
      <StyledItem>
        <FeedBody feed={data} />
        <StyledCommentsWrapper>{renderComments()}</StyledCommentsWrapper>
      </StyledItem>
    </Layout>
  );
}

const StyledItem = styled.div`
  width: 100%;
  padding: 10px 20px 0px 37px;

  @media (max-width: 360px) {
    padding: 10px 10px 0px 10px;
  }
`;
const StyledCommentsWrapper = styled.div`
  width: 100%;
  border-top: 2px solid #ff6600;
  margin-top: 50px;
  padding-top: 20px;
  p {
    margin: ;
  }
`;
