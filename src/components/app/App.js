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

import tileManager from '../tileManager.js';

const log = console.log;
const worker = new Worker();


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [],
      foundWords: [],
      playing: false,
      word: [],
      cbs: [],
      selectedTiles: []
    }
    window.app = this;
    this.verifyWord = this.verifyWord.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }
  findRandomWord(cb) {
    worker.postMessage({ type: 'getRand', value: getRandom(6, 12) });
    return new Promise((resolve, reject) => {
      worker.onmessage = ({ data }) => {
        if (data.type === "getRand") {
          resolve(data.value)
        }
      };
    })

  }
  verifyWord() {
    let word = this.state.word.join('');

    if (this.state.foundWords.indexOf(word) === -1) {
      worker.postMessage({ type: 'verifyWord', value: this.state.word });
    }


    worker.onmessage = ({ data }) => {
      if (data.type === "verifyWord") {
        if (data.value) {
          this.setState({ foundWords: [...this.state.foundWords, word] });
        }
      }
    };
  }
  componentDidMount() {

    tileManager.init({ worker });
    tileManager.assignDirection();

    this.findRandomWord().then((rany) => {
      tileManager.addFirstWord(rany);

      this.setState({
        tiles: tileManager.inArray().map(t => t.component())
      });

      let t = () => {

        tileManager.fillTiles().then(({ found, availableTile }) => {

          tileManager.setValue(availableTile, found.value);

          if (tileManager.takenTiles.length === 25) {
            return new Promise((res, rej) => rej('no availale tile'))
          } else {
            t();
          }

        }).catch((done) => {
          this.setState({
            tiles: tileManager.inArray().map(t => t.component()),
            drewWords: tileManager.keyword
          });
        });

      };

      t();


    });

  }
  cancelGame() {
    this.state.cbs.forEach(cb => {
      cb('notselected');
    });
    this.state.word = [];
    this.state.selectedTiles = [];
    this.state.playing = false;
    log(this.state)
  }
  handleMouseUp(e) {
    if(this.state.playing){
      this.cancelGame();
    }
  }
  render() {
    return (
      <div id="wrapper" onMouseUp={this.handleMouseUp}  >
        <Header />
        <PageLayout>
          <GameDescription />
          <GameBoard >
            <TileContainer drewWords={this.state.drewWords}>
              {
                this.state.tiles.map((Tile, index) => {
                  return (
                    <Fragment key={index.toString()}>
                      <Tile verifyWord={this.verifyWord} />
                      {(index + 1) % 5 ? null : <br />}
                    </Fragment>
                  );
                })
              }
            </TileContainer>
            <FoundWords words={this.state.foundWords}></FoundWords>
          </GameBoard>
        </PageLayout>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
