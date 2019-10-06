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
