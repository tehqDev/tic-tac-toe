import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Footer from "../components/Footer";
import Status from "../components/Status";
import TurnState from "../components/TurnState";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: Montserrat;
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
`;

const App = () => {
  const [title, setTitle] = useState("tic-tac-toe");
  const [turnState, setTurnState] = useState(TurnState.PLAYER_TURN);

  return (
    <StyledApp>
      <Header title={title} />
      <Status playerStatus={turnState} />
      <GameBoard turnState={turnState} setTurnState={setTurnState} />
      <Footer />
    </StyledApp>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
