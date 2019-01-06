import React from "react";
import styled from "styled-components";
import BoardButton from "./BoardButton";

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
  return (
    <StyledGameBoard>
      <BoardButton />
      <BoardButton />
      <BoardButton />

      <BoardButton />
      <BoardButton />
      <BoardButton />

      <BoardButton />
      <BoardButton />
      <BoardButton />
    </StyledGameBoard>
  );
};

export default GameBoard;
