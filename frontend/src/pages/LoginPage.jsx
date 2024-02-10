import { useState } from "react";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import { login } from "../services/auth-services";
import { useNavigate } from "react-router-dom";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.error("Login error:", error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
    </LoginPageContainer>
  );
};

export default LoginPage;
