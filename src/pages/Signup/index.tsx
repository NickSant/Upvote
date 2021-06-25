import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Container, SignupBox, SubmitButton } from "./styles";

import { toast } from "react-toastify";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts/AuthContext";
import { UserInfo } from "../../types";

const Signup: React.FC = () => {
  const [form] = Form.useForm();
  const { signup } = useAuth();
  let history = useHistory();

  const handleSubmit = async (values: UserInfo) => {
    const { success, message } = await signup(values);

    if (!success) {
      toast.error(message);
      return;
    }

    toast.success("Cadastrado com sucesso!!!");
    history.push("/");
    return;
  };

  return (
    <Container>
      <SignupBox data-testid="box">
        <h1>UPVOTE</h1>
        <h2>Registre-se</h2>
        <p>
          Já tem um cadastro? <Link to="/">Entrar</Link>
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Digite seu nome de usuário"
              size="large"
            />
          </Form.Item>
          <Form.Item label="Senha" name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Digite sua senha"
              size="large"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <SubmitButton type="primary" htmlType="submit" data-testid="submit">
              Entrar
            </SubmitButton>
          </Form.Item>
        </Form>
      </SignupBox>
    </Container>
  );
};

export default Signup;
