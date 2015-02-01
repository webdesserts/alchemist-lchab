/*
 * Alchemist-lchab
 *
 * Author: Michael C. Mullins
 * License: MIT
 *
 * Special thanks to Bruce Lindbloom not only for his color formulas
 * but for his color converter as well, both of which played a major
 * role in this module.
 *
 * You can find his site here:
 * http://www.brucelindbloom.com/
 *
 */

module.exports = function lchab () {
  return {
    name: 'lchab',
    to: { 'lab': function (L, C, H) {
      a = C * Math.cos(H * Math.PI / 180);
      b = C * Math.sin(H * Math.PI / 180);

      return [L, a, b]
    } },
    from: { 'lab': function (L, a, b) {
      C = Math.sqrt(a * a + b * b);
      H = 180 * Math.atan2(b, a) / Math.PI;
      if (H < 0) LCHab.H += 360;
      return [L, C, H]
    } }
  }
}
