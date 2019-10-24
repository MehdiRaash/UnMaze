import React, { Component, useState } from "react";


let TileComponent = ({ app, char, tileNumber }) => {
  return (props) => {

    const [hover, setHover] = useState('notselected');

    function handleMouseDown() {
      setHover('selected');
      //user starts playing
      app.state.selectedTiles.push(tileNumber);
      app.state.word.push(char);
      app.state.cbs.push(setHover);
      app.state.playing = true;
    };

    function handleMouseUp(params) {
      if (app.state.playing) {
        props.verifyWord();
        app.state.cbs.forEach(cb => {
          cb('notselected');
        });
      }
      app.state.playing = false;
      app.state.word = [];
      app.state.selectedTiles = [];
    }

    function handleMouseOver() {
      if (!app.state.playing)
        return;

      if (!app.state.selectedTiles.find(n => n === tileNumber)) {
        setHover('selected');
        app.state.selectedTiles.push(tileNumber);
        app.state.word.push(char);
        app.state.cbs.push(setHover);
      } else {
        setHover('forbidden');
        cancelGame();
      }

    }

    function cancelGame() {
      app.cbs.forEach(cb => {
        cb('notselected');
      });
      app.word = [];
      app.selectedTiles = [];
      app.playing = false;
      log(app)
    }

    function touchStart(params) {
      log('start')
    }
    function touchEnd(params) {
      log('end')
    }
    function touchMove(e) {
      log(e)
    }
    function touchCancel(params) {
      log('cancel')
    }
    return (
      <div className={"tile rounded-lg " + hover}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOver={handleMouseOver}

      // onTouchStart={touchStart}
      // onTouchMoveCapture={touchMove}
      // onTouchCancel={touchEnd}
      // onTouchEnd={touchCancel}
      >
        <span>{char}</span>
      </div>
    )
  }; 
};

export default TileComponent;