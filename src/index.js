import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Footer from "../components/Footer";
import Status from "../components/Status";
import TurnState from "../components/TurnState";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: Montserrat;
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
`;

const App = () => {
  const [title, setTitle] = useState("tic-tac-toe");
  const [turnState, setTurnState] = useState(TurnState.PLAYER_TURN);
  const [boardButtons, setBoardButtons] = useState([
    { marker: "", id: 1 },
    { marker: "", id: 2 },
    { marker: "", id: 3 },

    { marker: "", id: 4 },
    { marker: "", id: 5 },
    { marker: "", id: 6 },

    { marker: "", id: 7 },
    { marker: "", id: 8 },
    { marker: "", id: 9 }
  ]);

  const setMarker = id => {
    if (turnState) {
      switch (turnState) {
        case TurnState.PLAYER_TURN:
          let newButtons = boardButtons.map(button => {
            if (button.id === id) {
              return {
                id: button.id,
                marker: "X"
              };
            } else {
              return button;
            }
          });
          setBoardButtons(newButtons);
          setTurnState(TurnState.AI_TURN);

          break;
        case TurnState.AI_TURN:
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (turnState === TurnState.AI_TURN) {
      let buttonOptions = boardButtons.filter(button => {
        return button.marker === "";
      });

      let buttonOptionIds = buttonOptions.map(button => {
        return button.id;
      });
      let randomMoveId =
        buttonOptionIds[Math.floor(Math.random() * buttonOptionIds.length)];

      let newAiButtons = boardButtons.map(button => {
        if (button.id === randomMoveId) {
          return {
            id: button.id,
            marker: "O"
          };
        } else {
          return button;
        }
      });
      ///alert(JSON.stringify(newAiButtons));
      setBoardButtons(newAiButtons);
      setTurnState(TurnState.PLAYER_TURN);
    }
  });

  return (
    <StyledApp>
      <Header title={title} />
      <Status playerStatus={turnState} />
      <GameBoard setMarker={setMarker} boardButtons={boardButtons} />
      <Footer />
    </StyledApp>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
