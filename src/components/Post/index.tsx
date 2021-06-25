import React from "react";
import api from "../../services/api";

import { HeartOutlined, HeartTwoTone, LikeTwoTone, LikeOutlined } from "@ant-design/icons";
import { Container, OptionsContainer } from "./styles";
import { trigger } from "swr";
import { PostProps, ReactionProps } from "../../types";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL

const Post = ({ post }: { post: PostProps }) => {
  const date = new Date(post.createdAt);

  const handleReaction = async ({ like, love }: ReactionProps) => {
    try {
      await api.post("/reaction", { like, love, feedId: post.id });
    } catch (error) {
      toast.error("Ocorreu um erro de conexão")
    }

    trigger(apiUrl + "/feeds");
  };

  return (
    <Container>
      <h3>{post.author.username}</h3>
      <small>
        {date.toLocaleTimeString("pt-BR").slice(0, -3)} - {date.toLocaleDateString("pt-BR")}
      </small>
      <p>{post.content}</p>

      <OptionsContainer>
        <button
          data-testid="like-button"
          onClick={() =>
            handleReaction({
              like: !post.activeUserLikedIt,
              love: post.activeUserLovedIt,
            })
          }
        >
          {post.likes}
          {post.activeUserLikedIt ? <LikeTwoTone twoToneColor="#1eaaeb" /> : <LikeOutlined />}
          Curtir
        </button>
        <button
          data-testid="love-button"
          onClick={() =>
            handleReaction({
              like: post.activeUserLikedIt,
              love: !post.activeUserLovedIt,
            })
          }
        >
          {post.loves}
          {post.activeUserLovedIt ? <HeartTwoTone twoToneColor="#f70f8e" /> : <HeartOutlined />}
          Amei
        </button>
      </OptionsContainer>
    </Container>
  );
};

export default Post;
