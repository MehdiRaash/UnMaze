import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";


const GameBoard = (props) => {
  const { children } = props;

  return (
    <div className="md:flex" name="GameBoard">
     {children}
    </div>
  );
};

export default hot(GameBoard);
