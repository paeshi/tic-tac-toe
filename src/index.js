import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = (props) => {
  return <div className="square">{props.value}</div>;
};

const Board = () => {
  const renderSquare = () => {
    return <Square value="O" />;
  };
  return (
    <div style={{ backgroundColor: "skyblue", margin: 10, padding: 20 }}>
      Board
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
};
const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));
