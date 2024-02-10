import { useState } from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px #00000033;
`;

const ErrorMessage = styled.p`
  color: #ff6347;
  margin-bottom: 10px;
`;

const LoginForm = ({ onLogin, errorMessage }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
