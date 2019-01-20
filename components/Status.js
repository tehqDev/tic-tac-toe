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

const Status = ({ playerStatus }) => {
  const message =
    playerStatus === TurnState.PLAYER_TURN ? "Player Turn" : "Computer Turn";

  return <StyledStatus>{message}</StyledStatus>;
};

export default Status;
