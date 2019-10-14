import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

const gameDescription = () =>
  <div className="flex ">
    <div>
      <span>آن</span> <span>می</span> <span>ز</span>
    </div>
    <div>فقط برای موس دوستداران کار میکنه فعلا.</div>
  </div>;
  
export default hot(gameDescription);
