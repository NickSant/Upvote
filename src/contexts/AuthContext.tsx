import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";
import { AuthContextProps, UserInfo } from "../types";

//default values
const AuthContext = createContext<AuthContextProps>({
  signin: async (values) => await { success: true },
  signup: async (values) => await { success: true },
  logout: () => {},
  isAuthenticated: () => false,
  user: "jorge",
});

const AuthContextProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user };
    }
  });

  const signin = useCallback(async (values: UserInfo) => {
    try {
      const { data } = await api.post("/sign-in", values);

      localStorage.setItem("token", data);
      localStorage.setItem("user", values.username);

      setAuthData({ token: data, user: values.username });

      api.defaults.headers.authorization = `Bearer ${data}`;

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Ocorreu um erro",
      };
    }
  }, []);

  const signup = useCallback(async (values: UserInfo) => {
    try {
      await api.post("/sign-up", values);

      return { success: true, message: null };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Ocorreu um erro",
      };
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setAuthData({ token: "", user: "" });
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ signin, user: authData?.user, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthContextProvider, useAuth };
