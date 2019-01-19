import React, { useState } from "react";
import styled from "styled-components";
import TurnState from "./TurnState";

const StyledBoardButton = styled.div`
  border-style: dashed
  border-color: lightblue
  border-width: 5px
  width: 50px
  height: 50px
  display: flex
  justify-content: center
  align-items: center
  font-size: 40px
  font-weight: bolder
  margin: 10px
  color: lightgreen
  `;

const BoardButton = ({ turnState, setTurnState }) => {
  const [marker, setMarker] = useState("");

  const handleClick = () => {
    if (turnState) {
      switch (turnState) {
        case TurnState.PLAYER_TURN:
          setMarker("X");
          setTurnState(TurnState.AI_TURN);
          break;
        case TurnState.AI_TURN:
          setMarker("O");
          setTurnState(TurnState.PLAYER_TURN);
          break;
        default:
          setMarker("Z");
          break;
      }
    } else {
      setMarker("Z");
    }
  };

  return <StyledBoardButton onClick={handleClick}>{marker}</StyledBoardButton>;
};

export default BoardButton;
