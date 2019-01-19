import React, { useState } from "react";
import styled from "styled-components";
import BoardButton from "./BoardButton";
import TurnState from "./TurnState";

const StyledGameBoard = styled.div`
  border-thickness: 3px
  border-color: lightblue
  border-style: dashed
  border-radius: 4px
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  margin: 20px
  padding: 50px
  width: 300px
`;

const GameBoard = () => {
  const [turnState, setTurnState] = useState(TurnState.PLAYER_TURN);

  return (
    <StyledGameBoard>
      <BoardButton turnState={turnState} setTurnState={setTurnState} />
      <BoardButton turnState={turnState} setTurnState={setTurnState} />
      <BoardButton turnState={turnState} setTurnState={setTurnState} />

      <BoardButton turnState={turnState} setTurnState={setTurnState} />
      <BoardButton turnState={turnState} setTurnState={setTurnState} />
      <BoardButton turnState={turnState} setTurnState={setTurnState} />

      <BoardButton turnState={turnState} setTurnState={setTurnState} />
      <BoardButton turnState={turnState} setTurnState={setTurnState} />
      <BoardButton turnState={turnState} setTurnState={setTurnState} />
    </StyledGameBoard>
  );
};

export default GameBoard;
