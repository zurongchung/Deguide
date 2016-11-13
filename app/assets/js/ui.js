'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CSLibrary = new CSInterface();

var UI = function () {
  function UI() {
    _classCallCheck(this, UI);

    this.appUnit = 'px';
    this.valueIsNaN = /[^\d]/;
    this.valueIsNum = /\d/;
    var _ref = [0, 0];
    this.docWidth = _ref[0];
    this.docHeight = _ref[1];

    this.theme_class = new Map([['nav', 'ps_light_nav'], ['li.menu_item', ['ps_light_divide', 'ps_light_nav_menu_item']], ['input[name="guide_value"]', 'ps_light_guide_value'], ['.guide_value', 'ps_light_guide_value_input'], ['.guide_icon', 'ps_light_guide_icon'], ['.cls-2', 'ps_light_icon_cls2_fill'], ['.under_border:not(#bottom)', 'ps_light_margin_under_border'], ['#bottom', 'ps_light_margin_under_border_top'], ['.strip', 'ps_light_strip'], ['.hexgon_btn_theme', 'ps_light_hexgon_btn_theme'], ['.hexgon_btn_frame_theme', 'ps_light_hexgon_btn_frame_theme'], ['.text_on_btn', 'ps_light_text_on_btn']]);
    this.appThemeWasLight = false;
    this.appThemeWasDark = true;
  }

  _createClass(UI, [{
    key: 'valueFieldListener',
    value: function valueFieldListener() {
      var _this = this;

      var elemLists = $('input[name="guide_value"]', 'all').self;

      var _loop = function _loop(i) {
        elemLists[i].addEventListener('blur', function (e) {
          if (!_this.valueIsNaN.test(elemLists[i].value) && elemLists[i].value != '') {
            elemLists[i].value += _this.appUnit;
          }
        }, false);
      };

      for (var i = 0; i < elemLists.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: 'createGuides',
    value: function createGuides(canvasWidth, canvasHeight) {
      var guideProp = this.getValues();
      var guide = new (Function.prototype.bind.apply(DeGuide, [null].concat([canvasWidth, canvasHeight], _toConsumableArray(guideProp))))();
      var rows = guide.coordinatesHorizontalGuides;
      var columns = guide.coordinatesVerticleGuides;

      if (typeof rows != 'undefined') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var dy = _step.value;

            CSLibrary.evalScript('horizontal(' + dy + ')', function () {
              return console.log('h +1');
            });
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
      }
      if (typeof columns != 'undefined') {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var dx = _step2.value;

            CSLibrary.evalScript('vertical(' + dx + ')', function () {
              return console.log('v +1');
            });
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
      }
    }
  }, {
    key: 'gen',
    value: function gen() {
      var _this2 = this;

      $('#gen-btn').click(function (e) {
        CSLibrary.evalScript('getDocumentWidth()', function (w) {
          CSLibrary.evalScript('getDocumentHeight()', function (h) {
            var _ref2 = [parseInt(w), parseInt(h)];
            _this2.docWidth = _ref2[0];
            _this2.docHeight = _ref2[1];

            _this2.createGuides(_this2.docWidth, _this2.docHeight);
          });
        });
      });
    }
  }, {
    key: 'clearButtonListener',
    value: function clearButtonListener() {
      $('.clear_btn').click(function (e) {
        CSLibrary.evalScript('clearSelectedArtboardGuides()', function () {});
      });
    }
  }, {
    key: 'toggleGuidesVisibility',
    value: function toggleGuidesVisibility() {
      CSLibrary.evalScript('toggleGuidesVisibility()', function () {});
    }
  }, {
    key: 'quickGuide',
    value: function quickGuide() {}
  }, {
    key: 'attachListener',
    value: function attachListener() {
      this.valueFieldListener();
      this.clearButtonListener();
    }
  }, {
    key: 'initialTheme',
    value: function initialTheme() {
      var appTheme = new Theme();
      $('body').css('backgroundColor', appTheme.rgbHex);
      // else use default dark theme
      if (appTheme.isLightTheme) {
        this.lightTheme();
      }
    }
  }, {
    key: 'syncThemeListener',
    value: function syncThemeListener() {
      var appTheme = new Theme();
      $('body').css('backgroundColor', appTheme.rgbHex);
      if (!this.appThemeWasLight && this.appThemeWasDark && appTheme.isLightTheme) {
        this.lightTheme();
      } else if (!this.appThemeWasDark && this.appThemeWasLight && !appTheme.isLightTheme) {
        this.darkTheme();
      }
    }
  }, {
    key: 'lightTheme',
    value: function lightTheme() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.theme_class[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              elem = _step3$value[0],
              attr = _step3$value[1];

          $(elem).addClass(attr);
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

      console.log('using light theme');
      this.appThemeWasLight = true;
      this.appThemeWasDark = false;
    }
  }, {
    key: 'darkTheme',
    value: function darkTheme() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.theme_class[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              elem = _step4$value[0],
              attr = _step4$value[1];

          $(elem).removeClass(attr);
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

      console.log('using dark theme');
      this.appThemeWasLight = false;
      this.appThemeWasDark = true;
    }
  }, {
    key: 'unit',
    get: function get() {
      return this.appUnit;
    },
    set: function set(unit) {
      this.appUnit = unit;
    }
  }]);

  return UI;
}();