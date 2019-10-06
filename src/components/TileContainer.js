import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";


const TileContainer = (props) => {
  const { children } = props;

  return (
    <div className="bg-blue-200 md:w-1/2" name="TileContainer">
     test
    </div>
  );
};

export default hot(TileContainer);
