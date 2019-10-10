import { hot } from 'react-hot-loader/root';
import React, { Component, Fragment } from "react";
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

import tileManager from '../tileManager.js';

const log = console.log;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mainMessage: 'ss', tiles: [] }
  }
  findRandomWord(cb) {
    worker.postMessage({ type: 'getRand', value: getRandom(4, 8) });
    worker.onmessage = ({ data }) => {
      if (data.type === "getRand") {
        cb(data.value)
      }
    };
  }
  componentDidMount() {


    tileManager.init();
    tileManager.assignDirection();

    this.findRandomWord((randomWord) => {

      tileManager.addFirstWord(randomWord);

      this.setState({
        tiles: tileManager.inArray().map(t => t.component())
      });

      //  log(tileManager.treeOfRoutes(tileManager.tile_12) ) 

      // do fill the tiles

      tileManager.fillTiles();  

    });


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
              {
                this.state.tiles.map((Tile, index) => {
                  return (
                    <Fragment key={index.toString()}>
                      <Tile />
                      {(index + 1) % 5 ? null : <br />}
                    </Fragment>
                  );
                })
              }
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
