/* deltajs.js
 * https://github.com/simplyharsh/deltaJS
 *
 * by Harsh Kohli <simplyharsh@gmail.com>
 * copyright simplyharsh;
 */

var get_lcs = function (tA, tB) {
  var lenA = tA.length;
  var lenB = tB.length;

  if (!lenA || !lenB) {
    return '';
  }
  if (tA[lenA-1] == tB[lenB-1]) {
    return [get_lcs(tA.substring(0, lenA-1), tB.substring(0, lenB-1)), tA[lenA-1]].join('');
  } else {
    var lcsl = get_lcs(tA.substring(0, lenA-1), tB);
    var lcsr = get_lcs(tA, tB.substring(0, lenB-1));

    return (lcsl.length >= lcsr.length)? lcsl: lcsr;
  }
};

var textA = 'abcabba';
var textB = 'cbabac';

console.log('A:', textA)
console.log('B:', textB)
var lcs = get_lcs(textA, textB);

console.log();
console.log('LCS:', lcs);