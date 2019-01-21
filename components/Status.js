import React from "react";
import TurnState from "./TurnState";
import styled from "styled-components";

const StyledStatus = styled.div`
  margin: 20px 0px 0px 0px;
  color: seagreen;
  border-color: lightblue;
  font-weight: bolder;
  border-style: solid;
  border-radius: 8px;
  padding: 5px;
`;

const Status = ({ turnState }) => {
  let message = "";

  switch (turnState) {
    case TurnState.PLAYER_TURN:
      message = "Player Turn";
      break;

    case TurnState.AI_TURN:
      message = "Cpu Turn";
      break;

    case TurnState.PLAYER_WIN:
      message = "Player Wins!";
      break;

    case TurnState.AI_WIN:
      message = "Cpu Wins!";
      break;

    default:
      break;
  }

  return <StyledStatus>{message}</StyledStatus>;
};

export default Status;
