import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";  
import Header from './Header.js';
import Footer from './Footer.js';
import GameDescription from './GameDescription.js';
import GameBoard from './GameBoard.js';
import PageLayout from './PageLayout.js';
import TileContainer from './TileContainer.js';
import FoundWords from './FoundWords.js';
// import Scores from './ScoreContainer.js';

/** using Worker to convert all persian words into Trie data structure */
import Worker from '../worker/file.worker.js';
const worker = new Worker();

//worker.postMessage(); 
worker.onmessage = function (event) {
  console.log(event.data)
};

window.unmaze = {

  persianAlphabetMap: () => {
    let fa = new Map();
    fa.set(0, { char: 'ا' });
    fa.set(1, { char: 'ب' });
    fa.set(2, { char: 'پ' });
    fa.set(3, { char: 'ت' });
    fa.set(4, { char: 'ث' });
    fa.set(5, { char: 'ج' });
    fa.set(6, { char: 'چ' });
    fa.set(7, { char: 'ح' });
    fa.set(8, { char: 'خ' });
    fa.set(9, { char: 'د' });
    fa.set(10, { char: 'ذ' });
    fa.set(11, { char: 'ر' });
    fa.set(12, { char: 'ز' });
    fa.set(13, { char: 'ژ' });
    fa.set(14, { char: 'س' });
    fa.set(15, { char: 'ش' });
    fa.set(16, { char: 'ص' });
    fa.set(17, { char: 'ض' });
    fa.set(18, { char: 'ط' });
    fa.set(19, { char: 'ظ' });
    fa.set(20, { char: 'ع' });
    fa.set(21, { char: 'غ' });
    fa.set(22, { char: 'ف' });
    fa.set(23, { char: 'ق' });
    fa.set(24, { char: 'ک' });
    fa.set(25, { char: 'گ' });
    fa.set(26, { char: 'ل' });
    fa.set(27, { char: 'م' });
    fa.set(28, { char: 'ن' });
    fa.set(29, { char: 'و' });
    fa.set(30, { char: 'ه' });
    fa.set(31 , { char: 'ی' }); 
    return fa;
  }
};



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mainMessage: 'ss' }
  }
  componentDidMount() {
  }
  doSth() {
    console.log(this)
    this.setState({ mainMessage: "okay" });
  }
  render() {
    return (
      <>
        <Header />
        <PageLayout>
          <GameDescription />
          <GameBoard>
            <TileContainer></TileContainer>
            <FoundWords></FoundWords>
          </GameBoard>
        </PageLayout>
        <Footer />
      </>
    );
  }
}

export default hot(App);
