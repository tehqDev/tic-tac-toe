import React from "react";
import styled from "styled-components";
import BoardButton from "./BoardButton";

const StyledGameBoard = styled.div`
  border-thickness: 3px
  border-color: lightblue
  border-style: solid
  border-radius: 20px
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  margin: 30px
  padding: 20px 0px 20px 0px
  width: 300px
`;

const GameBoard = ({ setMarker, boardButtons }) => {
  return (
    <StyledGameBoard>
      {boardButtons.map(button => {
        return (
          <BoardButton key={button.id} button={button} setMarker={setMarker} />
        );
      })}
    </StyledGameBoard>
  );
};

export default GameBoard;
