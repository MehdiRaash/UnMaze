import words from '../files/Persian_words.json';
//let words = { 'آبی': '1', 'چپی': '1' }
const log = console.log;

onmessage = function (e) {
  //console.log(e.data)
};
let start = performance.now();
const persianAlphabetMap = () => {
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
  fa.set(31, { char: 'ی' });
  fa.set(32, { char: 'ء' });
  fa.set(33, { char: 'آ' });
  fa.set(34, { char: 'اً' });
  fa.set(35, { char: 'ة' });
  fa.set(36, { char: 'هٔ' });
  fa.set(37, { char: 'ئ' });
  return fa;
}
const fa = [
  'ا',
  'ب',
  'پ',
  'ت',
  'ث',
  'ج',
  'چ',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'ژ',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  'ظ',
  'ع',
  'غ',
  'ف',
  'ق',
  'ک',
  'گ',
  'ل',
  'م',
  'ن',
  'و',
  'ه',
  'ی',
  'ء',
  'آ',
  'اً',
  'ة',
  'هٔ',
  'ئ'];

/** having a counter handler for debugging purposes */
const Counter = function () {
  this.counter = 0;
  this.inc = () => { this.counter += 1; },
    this.print = () => { return this.counter; }
}

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
      let indexOf = fa.indexOf(node.char);
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
  pos_1: new Map(),
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
    let charNum = fa.indexOf(node.char);

    this[posNumber].set(
      fa[charNum],
      Array.isArray(this[posNumber].get(fa[charNum])) ? [node, ...this[posNumber].get(fa[charNum])] : [node]
    );
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

 
log( leaftNodeCollection); 