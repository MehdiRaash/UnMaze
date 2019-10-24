import React, { Component } from "react";
import TileComponent from './app/Tile.js';

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
    //TileComponent returns a functional component
    return TileComponent({ app: window.app, char: this.value, tileNumber: this.tileNumber });
  }
}

export default Tile;



