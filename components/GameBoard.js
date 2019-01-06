import React from "react";
import styled from "styled-components";

const StyledGameBoard = styled.div`
  border-thickness: 3px
  border-color: lightblue
  border-style: dashed
  border-radius: 4px
  display: flex
  justify-content: center
  align-items: center
  height: 300px
  margin: 10px
`;

const GameBoard = () => {
  return <StyledGameBoard>board :)</StyledGameBoard>;
};

export default GameBoard;
