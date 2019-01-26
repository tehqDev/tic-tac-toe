import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Footer from "../components/Footer";
import Status from "../components/Status";
import ResetButton from "../components/ResetButton";
import TurnState from "../components/TurnState";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: Montserrat;
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
`;

const initialState = [
  { marker: "", id: 1 },
  { marker: "", id: 2 },
  { marker: "", id: 3 },

  { marker: "", id: 4 },
  { marker: "", id: 5 },
  { marker: "", id: 6 },

  { marker: "", id: 7 },
  { marker: "", id: 8 },
  { marker: "", id: 9 }
];

const App = () => {
  const [reset, setReset] = useState(false);
  const [title, setTitle] = useState("tic-tac-toe");
  const [turnState, setTurnState] = useState(TurnState.PLAYER_TURN);
  const [boardButtons, setBoardButtons] = useState(initialState);

  const initialize = () => {
    setBoardButtons(initialState);
    setTurnState(TurnState.PLAYER_TURN);
    setReset(false);
  };

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

        default:
          break;
      }
    }
  };

  useEffect(() => {
    // check win conditions
    const playerButtons = boardButtons.filter(button => button.marker === "X");
    const cpuButtons = boardButtons.filter(button => button.marker === "O");

    const playerButtonIds = playerButtons.map(button => {
      return button.id;
    });

    const cpuButtonIds = cpuButtons.map(button => {
      return button.id;
    });

    const winConditions = [
      {
        positions: ["1", "2", "3"]
      },
      {
        positions: ["4", "5", "6"]
      },
      {
        positions: ["7", "8", "9"]
      },
      {
        positions: ["1", "5", "9"]
      },
      {
        positions: ["3", "5", "7"]
      },
      {
        positions: ["1", "4", "7"]
      },
      {
        positions: ["2", "5", "8"]
      },
      {
        positions: ["3", "6", "9"]
      }
    ];

    winConditions.map(condition => {
      const playerWin = condition.positions.every(winCondition => {
        return playerButtonIds.some(id => id == winCondition);
      });

      const cpuWin = condition.positions.every(winCondition => {
        return cpuButtonIds.some(id => id == winCondition);
      });

      if (playerWin) {
        setTurnState(TurnState.PLAYER_WIN);
      }

      if (cpuWin) {
        setTurnState(TurnState.AI_WIN);
      }

      const draw =
        playerButtonIds.length + cpuButtonIds.length == 9 &&
        !playerWin &&
        !cpuWin;

      if (draw) {
        setTurnState(TurnState.DRAW);
      }

      if (draw || playerWin || cpuWin) {
        setReset(true);
      }
    });
  });

  useEffect(() => {
    if (turnState === TurnState.AI_TURN) {
      const buttonOptions = boardButtons.filter(button => {
        return button.marker === "";
      });

      const buttonOptionIds = buttonOptions.map(button => {
        return button.id;
      });

      const randomMoveId =
        buttonOptionIds[Math.floor(Math.random() * buttonOptionIds.length)];

      const newAiButtons = boardButtons.map(button => {
        if (button.id === randomMoveId) {
          return {
            id: button.id,
            marker: "O"
          };
        } else {
          return button;
        }
      });

      // simulate decision making... :)
      const timer = setTimeout(() => {
        setBoardButtons(newAiButtons);
        setTurnState(TurnState.PLAYER_TURN);
      }, 1500);

      return () => clearInterval(timer);
    }
  });

  return (
    <StyledApp>
      <Header title={title} />
      <Status turnState={turnState} />
      <GameBoard setMarker={setMarker} boardButtons={boardButtons} />
      {reset ? <ResetButton reset={initialize} /> : <div />}
      <Footer />
    </StyledApp>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
