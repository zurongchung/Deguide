'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeGuide = function () {
  function DeGuide(canvasWidth, canvasHeight) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var col = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var mb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var mr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var hgutter = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var height = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var row = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var mt = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var ml = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var vgutter = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;

    _classCallCheck(this, DeGuide);

    /**
     * guide width and height
     */
    var _ref = [row, col];
    this.rows = _ref[0];
    this.columns = _ref[1];

    /**
     * gutters
     */
    var _ref2 = [width, height];
    this.w = _ref2[0];
    this.h = _ref2[1];

    /**
     * Margins
     */
    var _ref3 = [hgutter, vgutter];
    this.horizgaps = _ref3[0];
    this.vertgaps = _ref3[1];
    var _ref4 = [ml, mr];
    this.ml = _ref4[0];
    this.mr = _ref4[1];

    /**
     * movement
     */
    var _ref5 = [mt, mb];
    this.mt = _ref5[0];
    this.mb = _ref5[1];

    //[this.dx, this.dy] = [0, 0];
    var _ref6 = [canvasWidth, canvasHeight];
    this.canvasWidth = _ref6[0];
    this.canvasHeight = _ref6[1];

    /**
     * to => columnCoords, A collection of coordinates for columns
     * to => rowCoords, A collection of coordinates for rows
     */
    var _ref7 = [this.canvasWidth, this.canvasHeight];
    this.x = _ref7[0];
    this.y = _ref7[1];
    this.columnCoords = [];
    this.rowCoords = [];
  }

  /**
   * Algorithm to draw columns and rows
   * Require: 
   * => columns or width
   * => rows or height
   */


  _createClass(DeGuide, [{
    key: 'algoColumns',
    value: function algoColumns() {
      var canvasWidth = this.canvasWidth - this.ml - this.mr;
      if (!this.columns && this.w) {
        /**
         * calculate columns if only width is known */
        this.columns = canvasWidth / this.w;
      } else if (this.columns && !this.w) {
        /**
         * calculate width if only columns are known */
        this.w = canvasWidth / this.columns;
      }
      var i = 0,
          dx = void 0;
      for (; i <= this.columns; i++) {
        dx = i * (this.w + this.horizgaps) + this.ml;
        this.columnCoords.push(dx);
        if (this.horizgaps) {
          dx += this.horizgaps;
          this.columnCoords.push(dx);
        }
      }
    }
  }, {
    key: 'algoRows',
    value: function algoRows() {
      var canvasHeight = this.canvasHeight - this.mt - this.mb;
      if (!this.rows && this.h) {
        /**
         * calculate rows if only height is known */
        this.rows = canvasHeight / this.h;
      } else if (this.rows && !this.h) {
        /**
         * calculate height if only rows are known */
        this.h = canvasHeight / this.rows;
      }

      var i = 0,
          dy = void 0;
      for (; i <= this.rows; i++) {
        dy = i * (this.h + this.vertgaps) + this.mt;
        this.rowCoords.push(dy);
        if (this.vertgaps) {
          dy += this.vertgaps;
          this.rowCoords.push(dy);
        }
      }
    }
  }, {
    key: 'algoQuickGuides',
    value: function algoQuickGuides(target) {
      /**
       * app.activeDocument.guides.add(DIRECTION.HORIZONTAL | VERTICLE, x | y);
       *  Direction and coordinates
       * */
      var properties = [];
      switch (target) {
        case 'left':
          properties = [];
          break;
        case 'right':
          properties = [];
          break;
        case 'top':
          properties = [];
          break;
        case 'bottom':
          properties = [];
          break;
        case 'row-mid':
          properties = [];
          break;
        case 'col-mid':
          properties = [];
          break;
      }
      this.createGuides.apply(this, _toConsumableArray(properties));
    }
  }, {
    key: 'coordinatesVerticleGuides',
    get: function get() {
      if (this.columns || this.w) {
        this.algoColumns();
        return this.columnCoords;
      } else {
        return undefined;
      }
    }
  }, {
    key: 'coordinatesHorizontalGuides',
    get: function get() {
      if (this.rows || this.h) {
        this.algoRows();
        return this.rowCoords;
      } else {
        return undefined;
      }
    }
  }]);

  return DeGuide;
}();