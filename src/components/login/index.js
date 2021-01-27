import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import Error from "../messages/error";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = async () => {
    try {
      const auth = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email,
        password,
      });

      sessionStorage.setItem("token", auth.data.token);

      history.push("/");
    } catch (err) {
      setError(err.response.data.error.error);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        style={{
          width: "20%",
          border: "1px solid #ccc",
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="exemplo@exemplo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {error && <Error text={error}></Error>}
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Field>

        <Button primary onClick={submit}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
