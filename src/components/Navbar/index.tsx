import React from "react";

import { Container, LogoutButton } from "./styles";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  let history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <Container>
      <h1>UPVOTE</h1>

      <div className="nav-options">
        <h3>Olá, {user} </h3>
        <LogoutButton onClick={handleLogout}>
          Sair <LogoutOutlined />
        </LogoutButton>
      </div>
    </Container>
  );
};

export default Navbar;
