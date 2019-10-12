import React, { Component, useState } from "react";
const log = console.log;

/** Tile represents a cell of the board game, it has all its neighbours object in itself */
class Tile {
  constructor(number) {
    this.tileNumber = number;

    this.left = null;
    this.top = null;
    this.right = null;
    this.bottom = null;

    this.value = null;

    this.neighbours = [];
  }

  /**
   * helper fucntions to initilise the tiles
   * @param {Tile}
   */
  insertInArr(t) {
    if (t !== null)
      this.neighbours.push(t);
  }
  /**
   * helper fucntions to initilise the tiles
   * @param {Tile}
   */
  assignLeft(t) {
    this.insertInArr(t)
    this.left = t;
  }
  /**
   * helper fucntions to initilise the tiles
   * @param {Tile}
   */
  assignTop(t) {
    this.insertInArr(t)
    this.top = t;
  }
  /**
   * helper fucntions to initilise the tiles
   * @param {Tile}
   */
  assignRight(t) {
    this.insertInArr(t);
    this.right = t;
  }
  /**
   * helper fucntions to initilise the tiles
   * @param {Tile}
   */
  assignBottom(t) {
    this.insertInArr(t);
    this.bottom = t;
  }
  /**
   * it saves the value property of tile, eg: 'a'
   * @param {String} char 
   */
  setValue(char) {
    this.value = char;
  }
  /**
   * unsetting by nullifying the value property
   */
  unsetValue() {
    this.value = null;
  }
  /**
   * check if the value property of a tile has not been set, so it's empty
   * @returns {Boolean} 
   */
  isEmpty() {
    return !this.value;
  }
  /**
   * check if the value property of a tile has been set, so it's taken
   * @returns {Boolean} 
   */
  isTaken() {
    if (this.value) {
      return true
    }
    return false;
  }

  randDirection() {
    //return this.neighbours[Math.floor(Math.random() * this.neighbours.length)]
  }
  component() {
    let char = this.value;
    let tileNumber = this.tileNumber;
    const app = window.app;

    return function (props) {

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
  }
}

export default Tile;



