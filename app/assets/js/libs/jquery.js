'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = function $(prop) {
  var el = document.querySelector(prop);
  return new Selector(el);
};

var Selector = function () {
  function Selector(element) {
    _classCallCheck(this, Selector);

    this.el = element;
  }

  _createClass(Selector, [{
    key: 'on',
    value: function on(eventType, callback) {
      var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.self.addEventListener(eventType, callback, bubbles);
    }
    /**
     * click event
     * Bubbles up behavior is false by default
     */

  }, {
    key: 'click',
    value: function click(callback) {
      var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.self.addEventListener('click', callback, bubbles);
    }
    /**
     * blur event
     * Bubbles up behavior is false by default
     */

  }, {
    key: 'blur',
    value: function blur(callback) {
      var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.self.addEventListener('blur', callback, bubbles);
    }
    /**
     * setting or retrieving css value
     * @property prop The css property needed to work with
     * @property value The value for the property
     */

  }, {
    key: 'css',
    value: function css(prop, value) {
      if (arguments.length > 1) {
        /**
         * Setting value for the property
         */
        this.setStyle(prop, value);
      } else {
        /**
         * retrieving value of the property
         * Add a type check for the property provided => String
         * */
        if (typeof cssProp != "string") throw TypeError('Not a string');
        return parseInt(window.getComputedStyle(this.self).getPropertyValue(cssProp));
      }
    }
  }, {
    key: 'setStyle',
    value: function setStyle(propString, value) {
      switch (propString) {
        case 'backgroundColor':
        case 'bgc':
          this.style.backgroundColor = value;
          break;
        default:
          alert('Css does not have such property.');
      }
    }
  }, {
    key: 'self',
    get: function get() {
      return this.el;
    }
  }, {
    key: 'style',
    get: function get() {
      return this.self.style;
    }
  }]);

  return Selector;
}();