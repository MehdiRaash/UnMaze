import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";


const PageLayput = (props) => {
  const { children } = props;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto bg-white mt-4">
        {children}
      </div>
    </div>
  );
};

export default hot(PageLayput);
