'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var csi = new CSInterface();

var UI = function () {
  function UI(unit) {
    _classCallCheck(this, UI);

    this.unit = unit;
    this.quickGuideIDs = ['left', 'row-mid', 'top', 'bottom', 'col-mid', 'right'];
    this.IDs = ['width', 'columns', 'margin_bottom', 'margin_right', 'horiz_gutters', 'height', 'rows', 'margin_top', 'margin_left', 'vert_gutters'];
    //this.elements = this.getValueFieldElements();
    //this.pathParent = $('#groupGuides').self;
    this.againstNaN = /[^\d]/;
    this.againstNumbers = /\d/;
    this.values = [];
    var _ref = [0, 0];
    this.docWidth = _ref[0];
    this.docHeight = _ref[1];
  }

  _createClass(UI, [{
    key: 'getValueFieldElements',
    value: function getValueFieldElements() {
      var _this = this;

      var node = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var target = _step.value;

          var input_tag = $('#' + target).self;
          node.push(input_tag);
          $('#' + target).blur(function (e) {
            if (!_this.againstNaN.test(input_tag.value) && input_tag.value != '') {
              input_tag.value += _this.unit;
            }
          });
        };

        for (var _iterator = this.IDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return node;
    }
    /**
     * Have values from UI panel
     */

  }, {
    key: 'getValues',
    value: function getValues() {
      this.values = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;

          var value = 0;
          if (this.againstNumbers.test(node.value)) {
            value = parseInt(node.value);
          }
          this.values.push(value);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this.values;
    }
  }, {
    key: 'createGuides',
    value: function createGuides(canvasWidth, canvasHeight) {
      var guideProp = this.getValues();
      var guide = new (Function.prototype.bind.apply(DeGuide, [null].concat([canvasWidth, canvasHeight], _toConsumableArray(guideProp))))();
      var rows = guide.coordinatesHorizontalGuides;
      var columns = guide.coordinatesVerticleGuides;

      if (typeof rows != 'undefined') {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var dy = _step3.value;

            csi.evalScript('horizontal(' + dy + ')', function () {
              return console.log('h +1');
            });
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
      if (typeof columns != 'undefined') {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = columns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var dx = _step4.value;

            csi.evalScript('vertical(' + dx + ')', function () {
              return console.log('v +1');
            });
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  }, {
    key: 'gen',
    value: function gen() {
      var _this2 = this;

      $('#gen-btn').click(function (e) {
        csi.evalScript('getDocumentWidth()', function (w) {
          csi.evalScript('getDocumentHeight()', function (h) {
            var _ref2 = [parseInt(w), parseInt(h)];
            _this2.docWidth = _ref2[0];
            _this2.docHeight = _ref2[1];

            _this2.createGuides(_this2.docWidth, _this2.docHeight);
          });
        });
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      $('#clear-btn').click(function (e) {
        // Code to remove all guides
        alert(csi.hostEnvironment.appSkinInfo.panelBackgroundColor.color);
      });
    }
  }, {
    key: 'quickGuide',
    value: function quickGuide() {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.quickGuideIDs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var id = _step5.value;

          $('#' + id).click(function (e) {});
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: 'attachListener',
    value: function attachListener() {
      this.gen();
      this.clear();
      this.quickGuide();
    }
  }]);

  return UI;
}();