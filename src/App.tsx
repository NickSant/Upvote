import React from "react";
import { Routes } from "./routes";

import { AuthContextProvider } from "./contexts/AuthContext";
import GlobalStyle from "./styles/GlobalStyle";

import { ToastContainer } from 'react-toastify';

import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
