import React from "react";
import styled from "styled-components";

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

const BoardButton = () => {
  return <StyledBoardButton>O</StyledBoardButton>;
};

export default BoardButton;
