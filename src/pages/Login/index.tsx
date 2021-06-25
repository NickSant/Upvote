import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

import { Container, LoginBox, SubmitButton } from "./styles";
import ForgetPassModal from "../../components/ForgotPassModal";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { UserInfo } from "../../types";


export default function Login() {
  const [isForgetPassModalOpen, setIsForgetPassModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { signin } = useAuth();
  let history = useHistory();

  const handleSubmit = async (values: UserInfo) => {
    const { success, message } = await signin(values);

    if (!success) {
      toast.error(message);
      return;
    }

    history.push("/home");
    return;
  };

  return (
    <Container>
      <ForgetPassModal
        isOpened={isForgetPassModalOpen}
        setIsOpen={() => setIsForgetPassModalOpen((isOpened) => !isOpened)}
      />

      <LoginBox data-testid="box">
        <h1>UPVOTE</h1>
        <h2>Entrar</h2>
        <p>
          Não é cadastrado? <Link to="/sign-up">Registrar</Link>
        </p>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          data-testid="form"
          initialValues={{ username: "", password: "" }}
        >
          <Form.Item label="Usuário" name="username">
            <Input
              data-testid="usernameInput"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Digite seu nome de usuário"
              size="large"
            />
          </Form.Item>
          <Form.Item label="Senha" name="password">
            <Input.Password
              data-testid="passwordInput"
              prefix={<LockOutlined className="site-form-item-icon" />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              placeholder="Digite sua senha"
              size="large"
              type="password"
            />
          </Form.Item>

          <small
            onClick={() => setIsForgetPassModalOpen((isOpened) => !isOpened)}
          >
            Esqueci a senha
          </small>

          <Form.Item>
            <SubmitButton type="primary" htmlType="submit" data-testid="submit">
              Entrar
            </SubmitButton>
          </Form.Item>
        </Form>
      </LoginBox>
    </Container>
  );
}
