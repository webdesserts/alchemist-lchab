module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = lchab;

function lchab() {
  return {
    name: 'lchab',
    to: { 'lab': function lab(L, C, H) {
        var a = C * Math.cos(H * Math.PI / 180);
        var b = C * Math.sin(H * Math.PI / 180);

        return [L, a, b];
      } },
    from: { 'lab': function lab(L, a, b) {
        var C = Math.sqrt(a * a + b * b);
        var H = 180 * Math.atan2(b, a) / Math.PI;
        if (H < 0) H += 360;
        return [L, C, H];
      } }
  };
}

module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjA5NjlhNGVmMmE1ZGQ4NGM4OTIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDdkJ3QixLQUFLOztBQUFkLFNBQVMsS0FBSyxHQUFJO0FBQy9CLFNBQU87QUFDTCxRQUFJLEVBQUUsT0FBTztBQUNiLE1BQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzlCLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDOztBQUV4QyxlQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7T0FDakIsRUFBRTtBQUNILFFBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDekMsWUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDcEIsZUFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO09BQ2pCLEVBQUU7R0FDSjtDQUNGIiwiZmlsZSI6ImFsY2hlbWlzdC1sY2hhYi1ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyMDk2OWE0ZWYyYTVkZDg0Yzg5MlxuICoqLyIsIi8qXG4gKiBBbGNoZW1pc3QtbGNoYWJcbiAqXG4gKiBBdXRob3I6IE1pY2hhZWwgQy4gTXVsbGluc1xuICogTGljZW5zZTogTUlUXG4gKlxuICogU3BlY2lhbCB0aGFua3MgdG8gQnJ1Y2UgTGluZGJsb29tIG5vdCBvbmx5IGZvciBoaXMgY29sb3IgZm9ybXVsYXNcbiAqIGJ1dCBmb3IgaGlzIGNvbG9yIGNvbnZlcnRlciBhcyB3ZWxsLCBib3RoIG9mIHdoaWNoIHBsYXllZCBhIG1ham9yXG4gKiByb2xlIGluIHRoaXMgbW9kdWxlLlxuICpcbiAqIFlvdSBjYW4gZmluZCBoaXMgc2l0ZSBoZXJlOlxuICogaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxjaGFiICgpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnbGNoYWInLFxuICAgIHRvOiB7ICdsYWInOiBmdW5jdGlvbiAoTCwgQywgSCkge1xuICAgICAgdmFyIGEgPSBDICogTWF0aC5jb3MoSCAqIE1hdGguUEkgLyAxODApO1xuICAgICAgdmFyIGIgPSBDICogTWF0aC5zaW4oSCAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICByZXR1cm4gW0wsIGEsIGJdXG4gICAgfSB9LFxuICAgIGZyb206IHsgJ2xhYic6IGZ1bmN0aW9uIChMLCBhLCBiKSB7XG4gICAgICB2YXIgQyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbiAgICAgIHZhciBIID0gMTgwICogTWF0aC5hdGFuMihiLCBhKSAvIE1hdGguUEk7XG4gICAgICBpZiAoSCA8IDApIEggKz0gMzYwO1xuICAgICAgcmV0dXJuIFtMLCBDLCBIXVxuICAgIH0gfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==