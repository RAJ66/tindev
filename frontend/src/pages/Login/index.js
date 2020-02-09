import React, { useState, useContext } from "react";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import { Button, LoginContainer, Form, Input } from "./styles.js";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const { colors } = useContext(ThemeContext);

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
        <Switch
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#000"
          onColor="#000"
          onHandleColor={colors.primary}
          offHandleColor={colors.primary}
        />
      </Form>
    </LoginContainer>
  );
}
