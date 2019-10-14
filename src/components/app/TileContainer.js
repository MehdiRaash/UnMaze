import { hot } from 'react-hot-loader/root';
import React, { Component, Fragment } from "react";
import { getRandom, fa, getFaIndex } from '../../helper/main.js';
import FoundWordsModal from './FoundWordsModal';

const log = console.log;

const getStyle = () => {
  const style = {
    squire: {
      display: 'inline-block',
      width: '60px',
      height: '60px',
      padding: '2px',
      margin: '2px',
      backgroundColor: 'khaki'
    }
  };
  return style;
};

class TileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { modalDisplay: 'hidden' }
    this.modalClicked = this.modalClicked.bind(this);
    this.hideModalClicked = this.hideModalClicked.bind(this); 
  }
  componentDidMount() {
    window.onclick =  (event)=> {
      if(event.target.id === "myModal"){
        this.hideModalClicked();
      } 
    }
  }
  /** This is just for demonstration purpose */
  generateRandomLetter() { }
  draw() {
  }
  modalClicked() {
    this.setState({ modalDisplay: 'block' });
  }
  hideModalClicked() {
    this.setState({ modalDisplay: 'hidden' });
  }
  render() {
    const style = getStyle(); 
    return (
      <div className="w-full md:w-1/2 p-3 order-2 " name="TileContainer">
        <div className="clearfix">
          <button onClick={this.modalClicked} className="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">بخشی از کلمات این جدول</button>
          <FoundWordsModal words={this.props.drewWords} display={this.state.modalDisplay} hideModal={this.hideModalClicked} />
        </div>
        <div className="text-center" style={{ direction: 'ltr' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default hot(TileContainer);
