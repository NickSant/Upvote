import React, { useState } from "react";
import { toast } from "react-toastify";
import { trigger } from "swr";
import api from "../../services/api";

import { Container, TextareaInput, SubmitButton } from "./styles";

const apiUrl = process.env.REACT_APP_API_URL

const PostForm: React.FC = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try{
      await api.post("/feed", { content });
    }catch(error){
      toast.error(error.data?.response?.message || "Ocorreu algum erro")
      return;
    }
    
    setContent("")
    trigger(apiUrl + "/feeds");
  };

  return (
    <Container>
      <h3>Escreva um novo post</h3>
      <TextareaInput
        size="large"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitButton size="large" onClick={handleSubmit} type="primary">
        Publicar
      </SubmitButton>
    </Container>
  );
};

export default PostForm;
