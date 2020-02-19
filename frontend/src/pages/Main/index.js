import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";

import {
  MainContainer,
  List,
  Line,
  Image,
  Footer,
  Strong,
  Paragraph,
  Buttons,
  Button,
  Empty,
  MatchContainer,
  Avatar,
  MatchStrong,
  MatchParagraph
} from "./styles.js";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import dislike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import itsamatch from "../../assets/itsamatch.png";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "./../../utils/usePersistedState";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  const [theme, setTheme] = usePersistedState("theme", dark);
  const { colors, title } = theme;

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });
      setUsers(response.data);
    }
    loadUser();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { user: match.params.id }
    });

    socket.on("match", dev => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <MainContainer>
        <Link to="/">
          <img src={logo} alt="Tindev" />
        </Link>
        {users.length > 0 ? (
          <List>
            {users.map(user => (
              <Line key={user._id}>
                <Image src={user.avatar} alt="user.name" />
                <Footer>
                  <Strong>{user.name}</Strong>
                  <Paragraph>{user.bio}</Paragraph>
                </Footer>
                <Buttons>
                  <Button type="button" onClick={() => handleDislike(user._id)}>
                    <img src={dislike} alt="Dislike" />
                  </Button>
                  <Button type="button" onClick={() => handleLike(user._id)}>
                    <img src={like} alt="Like" />
                  </Button>
                </Buttons>
              </Line>
            ))}
          </List>
        ) : (
          <Empty>Acabou :(</Empty>
        )}

        {matchDev && (
          <MatchContainer>
            <img src={itsamatch} alt="It a match" />
            <Avatar className="avatar" src={matchDev.avatar} />
            <MatchStrong>{matchDev.name}</MatchStrong>
            <MatchParagraph>{matchDev.bio}</MatchParagraph>

            <button type="button" onClick={() => setMatchDev(null)}>
              Fechar
            </button>
          </MatchContainer>
        )}
      </MainContainer>
    </ThemeProvider>
  );
}
