import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function footer() {
  return (
    <div className="text-center" >Made by Mehdi Raash, <a href="https://github.com/MehdiRaash/unmaze" style={{color:'darkred'}}>Github repo</a></div>
  );
}

export default hot(footer);
