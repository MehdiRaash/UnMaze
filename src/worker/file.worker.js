import dicWords from '../files/Persian_words.json';
const log = console.log;

onmessage = function (e) {
  //console.log(e.data)
};

//postMessage(y);

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


// for(let y in dicWords){
//   console.log(y)
// }
let words = { "آب": "1", "درمان": "1", "آب": "1", "آبادان": "1" };

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
        if (this.children.has(indexOf)) {
          theNode = this.children.get(indexOf);
        } else {

          this.children.set(indexOf, node);
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
  setAsLeaf() {
    this.isLeaf = true;
  }
}

let rootNode = new Node(null);

/** an alias for root node so , generally, seems more generic in loop */
const getRootNode = () => rootNode;
let parentNode = getRootNode();

/** iterate over each word and just build the graph of Trie */
for (let word in dicWords) {

  /** make sure to have an array representaition of word */
  let wordInArr = word.split(''); 
  wordInArr.forEach((char, index) => {

    let node = parentNode.addChild(new Node(char));

    /** if this is the last Char, make the node as a leaf node*/
    if (index === wordInArr.length - 1) {
      node.setAsLeaf();
    }

    parentNode = node;
  });

}
log(getRootNode())