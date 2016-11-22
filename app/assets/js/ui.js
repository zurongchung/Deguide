'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CSLibrary = new CSInterface();
var csi_el = function csi_el(_ins) {
  var _cab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  CSLibrary.evalScript(_ins, _cab);
};

var UI = function () {
  function UI() {
    _classCallCheck(this, UI);

    this.valueContainNaN = /[^\d]/;
    this.valueMustBeNum = /\d/;
    var _ref = [0, 0];
    this.docWidth = _ref[0];
    this.docHeight = _ref[1];

    this.appThemeWasDark = true;
    this.appThemeWasLight = false;
    this.theme_class = new Map([['nav', 'ps_light_nav'], ['li.menu_item', 'ps_light_divide ps_light_nav_menu_item'], ['input[name="guide_value"]', 'ps_light_guide_value'], ['.guide_value', 'ps_light_guide_value_input'], ['.guide_icon', 'ps_light_guide_icon'], ['.cls-2', 'ps_light_icon_cls2_fill'], ['.under_border:not(#bottom)', 'ps_light_margin_under_border'], ['#bottom', 'ps_light_margin_under_border_top'], ['.strip', 'ps_light_strip'], ['.hexgon_btn_theme', 'ps_light_hexgon_btn_theme'], ['.hexgon_btn_frame_theme', 'ps_light_hexgon_btn_frame_theme'], ['.text_on_btn', 'ps_light_text_on_btn']]);
  }

  _createClass(UI, [{
    key: 'inputListener',
    value: function inputListener() {
      var _this = this;
      $('input[name="guide_value"]').blur(function () {
        // not using arrow function because arrow func does't bind Lexical `this`
        // because jquery need $(this)
        var $this = $(this)[0];
        csi_el('Deguide.unitType()', function (_unit) {
          if (_this.valueMustBeNum.test($this.value) && !_this.valueContainNaN.test($this.value)) $this.value += _unit;
        });
      });
    }
  }, {
    key: 'gen',
    value: function gen() {
      $('.gen_btn').click(function (e) {
        var to = 'left';
        csi_el('Deguide.preset.fibonacci(\'' + to + '\')');
      });
    }
  }, {
    key: 'clearButtonListener',
    value: function clearButtonListener() {
      $('.clear_btn').click(function (e) {
        csi_el('Deguide.clearAll()');
      });
    }
  }, {
    key: 'toggleVisibilityListener',
    value: function toggleVisibilityListener() {
      $('.logo_link').click(function (e) {
        csi_el('Deguide.test()');
      });
    }
  }, {
    key: 'setBorderListener',
    value: function setBorderListener() {
      $('.set_border').click(function () {
        var order = parseInt($(this).css('order'));
        csi_el('Deguide.canvasBorder(' + order + ')');
      });
    }
  }, {
    key: 'attachListener',
    value: function attachListener() {
      this.gen();
      this.setBorderListener();
      this.inputListener();
      this.clearButtonListener();
      this.toggleVisibilityListener();
    }
  }, {
    key: 'initialTheme',
    value: function initialTheme() {
      var appTheme = new Theme();
      $('body').css('background-color', appTheme.rgbHex);
      // else use default dark theme
      if (appTheme.isLightTheme) this.lightTheme();
    }
  }, {
    key: 'syncThemeListener',
    value: function syncThemeListener() {
      var appTheme = new Theme();
      $('body').css('background-color', appTheme.rgbHex);
      if (!this.appThemeWasLight && this.appThemeWasDark && appTheme.isLightTheme) this.lightTheme();
      if (!this.appThemeWasDark && this.appThemeWasLight && !appTheme.isLightTheme) this.darkTheme();
    }
  }, {
    key: 'lightTheme',
    value: function lightTheme() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.theme_class[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              elem = _step$value[0],
              attr = _step$value[1];

          $(elem).addClass(attr);
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

      console.log('using light theme');
      this.appThemeWasLight = true;
      this.appThemeWasDark = false;
    }
  }, {
    key: 'darkTheme',
    value: function darkTheme() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.theme_class[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              elem = _step2$value[0],
              attr = _step2$value[1];

          $(elem).removeClass(attr);
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

      console.log('using dark theme');
      this.appThemeWasLight = false;
      this.appThemeWasDark = true;
    }
  }]);

  return UI;
}();