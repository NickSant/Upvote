import React from "react";
import { usePost } from "../../hooks/usePost";
import { PostProps } from "../../types";
import Post from "../Post";

import { Container } from "./styles";

const PostsList: React.FC = () => {
  const posts = usePost();  

  return (
    <Container>
      {posts?.map((post : PostProps) => {
        return <Post post={post} key={post.id} />;
      })}
    </Container>
  );
};

export default PostsList;
