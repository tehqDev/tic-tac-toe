import React from "react";
import styled from "styled-components";

const StyledResetButton = styled.div`
  background-color: lightgreen;
  color: white;
  border-color: white;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  margin: 0px 0px 10px 0px;
  font-weight: bolder;
`;

const ResetButton = ({ reset }) => {
  return <StyledResetButton onClick={reset}>Again?</StyledResetButton>;
};

export default ResetButton;
