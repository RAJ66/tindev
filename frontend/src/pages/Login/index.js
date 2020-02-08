import React, { useState } from "react";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import { Button, LoginContainer, Form, Input } from "./styles.js";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      username
    });
    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  }

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <Input
          placeholder="Escreve nome do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </LoginContainer>
  );
}
