import { fa, getFaIndex, Counter } from '../helper/main.js';
import words from '../files/Persian_words.json';
//let words = { 'آبی': '1', 'چپی': '1' }
const log = console.log;

let start = performance.now();

class Node {
  constructor(char, isLeaf = false) {
    if (char === null) {
      this.type = 'root';
    }
    this.char = char;
    this.isLeaf = isLeaf;
    this.children = new Map();

  }
  addChild(node) {
    try {
      /** the final node */
      let theNode;
      let indexOf = getFaIndex(node.char);
      if (indexOf !== -1) {

        /** there was a Node for this position so just return it If not make a new one as the final node*/
        if (this.children.has(fa[indexOf])) {
          theNode = this.children.get(fa[indexOf]);
        } else {
          this.children.set(fa[indexOf], node);
          theNode = node;
        }

        return theNode;
      } else {
        console.warn(node, 'a node char has not found!!!')
      }
    } catch (e) {
      log(e)
    }

  }
  addFather(parent) {
    this.father = parent;
  }
  setAsLeaf() {
    this.isLeaf = true;
  }
  /** it backtracks till root to render the whole word */
  print() {
    let letters = [];

    let checkFather = (node) => {
      if (!node.char)
        return

      letters.push(node.char)
      checkFather(node.father);
    }
    checkFather(this)
    return letters.reverse().join('');
  }
}

const leaftNodeCollection = {
  pos_1: new Map(),// there's no One letter word, it line is just for complition sake
  pos_2: new Map(),
  pos_3: new Map(),
  pos_4: new Map(),
  pos_5: new Map(),
  pos_6: new Map(),
  pos_7: new Map(),
  pos_8: new Map(),
  pos_9: new Map(),
  pos_10: new Map(),
  pos_11: new Map(),
  pos_12: new Map(),
  pos_13: new Map(),
  pos_14: new Map(),
  pos_15: new Map(),
  init: () => {
  },
  add: function (wordLength, node) {
    let posNumber = 'pos_' + String(wordLength);
    let charNum = getFaIndex(node.char);

    this[posNumber].set(
      fa[charNum],
      Array.isArray(this[posNumber].get(fa[charNum])) ? [node, ...this[posNumber].get(fa[charNum])] : [node]
    );
  },
  rand: function (number) {
    let propName = 'pos_' + String(number);
    let arr = [...this[propName].keys()];
    let char = arr[Math.floor(Math.random() * this[propName].size)];

    let nodes = this[propName].get(char)
    let randomedNode = nodes[Math.floor(Math.random() * nodes.length)];
    return randomedNode.print();
  }
};

let rootNode = new Node(null);
const getRootNode = () => rootNode;

/** an alias for root node so , generally, seems more generic in loop */
let parentNode = getRootNode();

let wordCount = new Counter();
/** iterate over each word and just build the graph of Trie */
for (let word in words) {
  wordCount.inc();

  let wordInArr = word.split('');
  wordInArr.forEach((char, index) => {

    let node = parentNode.addChild(new Node(char));
    node.addFather(parentNode);

    /** if this is the last Char, make the node as a leaf node*/
    if (index === wordInArr.length - 1) {
      node.setAsLeaf();
      leaftNodeCollection.add(wordInArr.length, node);
    }

    parentNode = node;
  });

  parentNode = getRootNode();
}
let finish = performance.now();


onmessage = function ({ data }) {
  if (data.type === "getRand") {
    postMessage({ type: data.type, value: leaftNodeCollection.rand(data.value) });
  }
  else if (data.type === "") {

  }
};
//log(leaftNodeCollection)