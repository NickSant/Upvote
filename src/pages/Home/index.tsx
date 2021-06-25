import React from "react";

import Navbar from "../../components/Navbar";
import PostForm from "../../components/PostForm";
import PostsList from "../../components/PostsList";


import { Container, MainWrapper } from "./styles";

export default function Home() {

  return (
    <Container>
      <Navbar />
      <MainWrapper>
        <PostForm />
        <PostsList />
      </MainWrapper>
    </Container>
  );
}
