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
import { getRandom, Counter } from '../../helper/main.js';

/** using Worker to convert all persian words into Trie data structure */
import Worker from '../../worker/file.worker.js'; 
const worker = new Worker();

const log = console.log;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mainMessage: 'ss' }
  }
  componentDidMount() {
    worker.postMessage({ type: 'getRand', value: getRandom(5, 9) });
    worker.onmessage = ({ data }) => {
      if (data.type === "getRand") {
        this.setState({ mainMessage: data.value })
      }
    }; 
  }
  doSth() {
    this.setState({ mainMessage: "okay" });
  }
  render() {
    return (
      <>
        <Header />
        {this.state.mainMessage}
        <PageLayout>
          <GameDescription />
          <GameBoard >
            <TileContainer>

            </TileContainer>
            <FoundWords></FoundWords>
          </GameBoard>
        </PageLayout>
        <Footer />
      </>
    );
  }
}

export default hot(App);
