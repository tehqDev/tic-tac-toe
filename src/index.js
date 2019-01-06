import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: Montserrat;
`;

const App = () => {
  const [title, setTitle] = useState("tic-tac-toe");

  return (
    <StyledApp>
      <Header title={title} />
    </StyledApp>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
