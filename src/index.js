import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";

const App = () => {
  const [title, setTitle] = useState("tic-tac-toe");

  return (
    <div>
      <Header title={title} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
