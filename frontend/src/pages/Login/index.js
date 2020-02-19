import React, { useState, useContext } from "react";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import { Button, LoginContainer, Form, Input, DivSiwtch } from "./styles.js";
import Switch from "react-switch";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  const [theme, setTheme] = useState(dark);
  const { colors, title } = theme;

  const toggleThme = () => {
    setTheme(title === "light" ? dark : light);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      username
    });
    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <img src={logo} alt="Tindev" />
          <Input
            placeholder="Escreve nome do GitHub"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
          <DivSiwtch>
            <Switch
              onChange={toggleThme}
              checked={true}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor="#666"
              onColor="#666"
              onHandleColor={colors.primary}
              offHandleColor={colors.primary}
            />
          </DivSiwtch>
        </Form>
      </LoginContainer>
    </ThemeProvider>
  );
}
