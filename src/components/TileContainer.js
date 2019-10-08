import { hot } from 'react-hot-loader/root';
import React, { Component, Fragment } from "react";
import { getRandom, fa, getFaIndex } from '../helper/main.js';

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
    this.state = { tileArr: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] };
  }
  componentDidMount() {
    this.draw();
  }
  /** This is just for demonstration purpose */
  generateRandomLetter() {
    let fa = window.unmaze.persianAlphabetMap(); 
  }
  draw() {
    console.log(fa)
  }
  render() {
    const style = getStyle();

    return (
      <div className=" w-full md:w-1/2 p-3 order-2" name="TileContainer">
        <button onClick={(e) => this.generateRandomeTile(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">نمایش حروف</button>
        <div className="s" style={{ direction: 'ltr' }} >
          {
            this.state.tileArr.map((item, index) => {

              return (
                <Fragment key={index.toString()}>
                  <div className="tile rounded-lg">
                    <span>{item.char || '.'}</span>
                  </div>
                  {(index + 1) % 5 ? null : <br />}
                </Fragment>
              );
            })
          }
        </div>
      </div>
    );
  }
};

export default hot(TileContainer);
