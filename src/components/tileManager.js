import React, { Component } from "react";
import Tile from './Tile.js';

const log = console.log;

/** tiles container object */
const tileManager = {

  /**
   * creates 25 tile object and pushes into container 
   */
  init: function () {
    this.takenTiles = [];
    this.container = [];

    for (let i = 1; i <= 25; i++) {
      this.container.push(
        this['tile_' + String(i)] = new Tile(i)
      );
    }
  },

  /**
   * manually assigns each tile direction to its neighbour
   */
  assignDirection: function () {
    this.tile_1.assignLeft(null);
    this.tile_1.assignTop(null);
    this.tile_1.assignRight(this.tile_2)
    this.tile_1.assignBottom(this.tile_6);

    this.tile_2.assignLeft(this.tile_1);
    this.tile_2.assignTop(null);
    this.tile_2.assignRight(this.tile_3)
    this.tile_2.assignBottom(this.tile_7);

    this.tile_3.assignLeft(this.tile_2);
    this.tile_3.assignTop(null);
    this.tile_3.assignRight(this.tile_4)
    this.tile_3.assignBottom(this.tile_8);

    this.tile_4.assignLeft(this.tile_3);
    this.tile_4.assignTop(null);
    this.tile_4.assignRight(this.tile_5)
    this.tile_4.assignBottom(this.tile_9);

    this.tile_5.assignLeft(this.tile_4);
    this.tile_5.assignTop(null);
    this.tile_5.assignRight(null)
    this.tile_5.assignBottom(this.tile_10);

    this.tile_6.assignLeft(null);
    this.tile_6.assignTop(this.tile_1);
    this.tile_6.assignRight(this.tile_7)
    this.tile_6.assignBottom(this.tile_11);

    this.tile_7.assignLeft(this.tile_6);
    this.tile_7.assignTop(this.tile_2);
    this.tile_7.assignRight(this.tile_8)
    this.tile_7.assignBottom(this.tile_12);

    this.tile_8.assignLeft(this.tile_7);
    this.tile_8.assignTop(this.tile_3);
    this.tile_8.assignRight(this.tile_9)
    this.tile_8.assignBottom(this.tile_13);

    this.tile_9.assignLeft(this.tile_8);
    this.tile_9.assignTop(this.tile_4);
    this.tile_9.assignRight(this.tile_10)
    this.tile_9.assignBottom(this.tile_14);

    this.tile_10.assignLeft(this.tile_9);
    this.tile_10.assignTop(this.tile_5);
    this.tile_10.assignRight(null)
    this.tile_10.assignBottom(this.tile_15);

    this.tile_11.assignLeft(null);
    this.tile_11.assignTop(this.tile_6);
    this.tile_11.assignRight(this.tile_12)
    this.tile_11.assignBottom(this.tile_16);

    this.tile_12.assignLeft(this.tile_11);
    this.tile_12.assignTop(this.tile_7);
    this.tile_12.assignRight(this.tile_13)
    this.tile_12.assignBottom(this.tile_17);

    this.tile_13.assignLeft(this.tile_12);
    this.tile_13.assignTop(this.tile_8);
    this.tile_13.assignRight(this.tile_14)
    this.tile_13.assignBottom(this.tile_18);

    this.tile_14.assignLeft(this.tile_13);
    this.tile_14.assignTop(this.tile_9);
    this.tile_14.assignRight(this.tile_15)
    this.tile_14.assignBottom(this.tile_19);

    this.tile_15.assignLeft(this.tile_14);
    this.tile_15.assignTop(this.tile_10);
    this.tile_15.assignRight(null)
    this.tile_15.assignBottom(this.tile_20);

    this.tile_16.assignLeft(null);
    this.tile_16.assignTop(this.tile_11);
    this.tile_16.assignRight(this.tile_17)
    this.tile_16.assignBottom(this.tile_21);

    this.tile_17.assignLeft(this.tile_16);
    this.tile_17.assignTop(this.tile_12);
    this.tile_17.assignRight(this.tile_18)
    this.tile_17.assignBottom(this.tile_22);

    this.tile_18.assignLeft(this.tile_17);
    this.tile_18.assignTop(this.tile_13);
    this.tile_18.assignRight(this.tile_19)
    this.tile_18.assignBottom(this.tile_23);

    this.tile_19.assignLeft(this.tile_18);
    this.tile_19.assignTop(this.tile_14);
    this.tile_19.assignRight(this.tile_20)
    this.tile_19.assignBottom(this.tile_24);

    this.tile_20.assignLeft(this.tile_19);
    this.tile_20.assignTop(this.tile_15);
    this.tile_20.assignRight(null)
    this.tile_20.assignBottom(this.tile_25);

    this.tile_21.assignLeft(null);
    this.tile_21.assignTop(this.tile_16);
    this.tile_21.assignRight(this.tile_22)
    this.tile_21.assignBottom(null);

    this.tile_22.assignLeft(this.tile_21);
    this.tile_22.assignTop(this.tile_17);
    this.tile_22.assignRight(this.tile_23)
    this.tile_22.assignBottom(null);

    this.tile_23.assignLeft(this.tile_22);
    this.tile_23.assignTop(this.tile_18);
    this.tile_23.assignRight(this.tile_24)
    this.tile_23.assignBottom(null);

    this.tile_24.assignLeft(this.tile_23);
    this.tile_24.assignTop(this.tile_19);
    this.tile_24.assignRight(this.tile_25)
    this.tile_24.assignBottom(null);

    this.tile_25.assignLeft(this.tile_24);
    this.tile_25.assignTop(this.tile_20);
    this.tile_25.assignRight(null)
    this.tile_25.assignBottom(null);

  },

  /**
   * it returns the array of the tiles
   * @returns {Tile[]} 
   */
  inArray: function () {
    return this.container;
  },

  /**
   * it just randomlly gives a tile!
   * @returns {Tile} 
   */
  randomTile: function () {
    return this.container[Math.floor(Math.random() * this.container.length)];
  },


  /**
   * it sets tile's value and put 'the' object into takenTiles array
   * @param {Tile} tile 
   * @param {String} value - it's just a character 
   */
  setValue: function (tile, value) {
    tile.setValue(value);
    this.takenTiles.push(tile);
  },

  drawIntoBoard: function (tile, char) {
    this.setValue(randomedTile, char);
  },

  addFirstWord: function (word) {

    let wordInArr = word.split('');

    let randomedTile = this.randomTile();

    let randomNeighbour = (tile) => {
      let emptyTiles = tile.neighbours.filter(t => t.isEmpty());
      return emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
    };  
    for (let char of wordInArr) { 
      this.setValue(randomedTile, char); 
      randomedTile = randomNeighbour(randomedTile);
    };  

  },
  randomedTakenTile: function () {
    return this.takenTiles[Math.floor(Math.random() * this.takenTiles.length)];
  }
};


export default tileManager;
