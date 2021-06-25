import React, { useState } from "react";
import api from "../../services/api";
import { ModalProps, UserInfo } from "../../types";

import { Modal, Input } from "antd";
import { toast } from "react-toastify";
import { InfoContainer } from "./styles";

const ForgetPassModal = ({ isOpened, setIsOpen }: ModalProps) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserInfo>();

  const submitForgetPass = async () => {
    try {
      const { data } = await api.get(`/forgot-password/${username}`);

      if (!data) {
        toast.warning("Não encontramos nada, tem certeza de que digitou o usuário corretamente?");
        return;
      }

      setUserData(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Algo deu errado");
    }
  };

  const closeModal = () => {
    setUsername("");
    setUserData({ username: "", password: "" });
    setIsOpen();
  };

  return (
    <Modal
      title="Esqueci a senha"
      visible={isOpened}
      onOk={submitForgetPass}
      onCancel={closeModal}
      okText="Enviar"
      cancelText="Cancelar"
      okButtonProps={{ name: "submit" }}
    >
      <p> Digite seu usuário para recuperar sua senha </p>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} data-testid="usernameInput" />

      {userData && userData?.password !== "" && (
        <InfoContainer>
          Sua senha:
          <Input.Password value={userData?.password} readOnly data-testid="password" />
        </InfoContainer>
      )}
    </Modal>
  );
};

export default ForgetPassModal;
