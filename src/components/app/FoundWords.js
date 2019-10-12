import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";


const FoundWords = (props) => {
  // const { children } = props;

  return (
    <div className="w-full md:w-1/2 order-1 p-4" name="FoundWords">
      <h2 className="text-center ftitle">کلمات پیدا شده  {props.words.length===0?"(فعلا هیچی!)":""} </h2>
      <ul className="text-center">
        {props.words && props.words.map((word, index) => {
          return <li className="foundword" key={index}><span >{word}</span></li>
        })}
      </ul>
    </div>
  );
};

export default hot(FoundWords);
