import React, { useState } from "react";
import "./Login.css";

import api from "../services/api";

import logo from "../assets/logo.svg";

import { LoginContainer } from "./styles.js";

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
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite se usuario do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </LoginContainer>
  );
}
