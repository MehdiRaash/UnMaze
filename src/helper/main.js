const getRandom = (min, max) => parseInt(Math.random() * (max - min) + min);
const getPersianAlphabet = () => [
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

const getFaIndex = (char = null) => {
  if (char === null) {
    return -1
  } else {
    return getPersianAlphabet().indexOf(char);
  }
};

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
/** having a counter handler for debugging purposes */
const Counter = function () {
  this.counter = 0;
  this.inc = () => { this.counter += 1; },
    this.print = () => { return this.counter; }
}
const shuffle = function (array) {
  return array.sort(() => Math.random() - 0.5);
};

module.exports = { getRandom, fa: getPersianAlphabet(), getFaIndex, Counter, shuffle };