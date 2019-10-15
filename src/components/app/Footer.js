import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function footer() {
  return (
    <div className="text-center" >
       <span> ساخته شده توسط</span>
       &nbsp;
      <a href="https://github.com/MehdiRaash">مهدی راش </a>
      <a href="https://github.com/MehdiRaash/unmaze" style={{ color: 'darkred' }}>Github repo</a>
    </div>
  );
}

export default hot(footer);
