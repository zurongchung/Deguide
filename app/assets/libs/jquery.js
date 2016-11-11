'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = function $(identifier) {
  /******************************
   * Select element with and ID *
   * ****************************/
  var elem = new Object();
  if (/^#/.test(identifier)) {
    elem = document.querySelector(identifier);
  } else {
    elem = document.querySelectorAll(identifier);
  }
  if (elem == null) {
    alert('Element => ' + identifier + ': no such element on this page');
    return;
  }
  return new Selector(elem);
};

var Selector = function () {
  function Selector(element) {
    _classCallCheck(this, Selector);

    this.elem = element;
  }

  _createClass(Selector, [{
    key: 'on',

    /*********
     * Event *
     *********/
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
    /******************
     * HTML Attribute *
     * ****************/

  }, {
    key: 'addClass',
    value: function addClass(newClass) {
      if (this.isNodeList) {
        for (var i = 0; i < this.self.length; i++) {
          if (newClass instanceof Array) {
            var _self$i$classList, _console;

            (_self$i$classList = this.self[i].classList).add.apply(_self$i$classList, _toConsumableArray(newClass));
            (_console = console).log.apply(_console, _toConsumableArray(newClass));
          } else {
            this.self[i].classList.add(newClass);
            console.log(newClass);
          }
        }
      } else {
        if (newClass instanceof Array) {
          var _self$classList, _console2;

          (_self$classList = this.self.classList).add.apply(_self$classList, _toConsumableArray(newClass));
          (_console2 = console).log.apply(_console2, _toConsumableArray(newClass));
        } else {
          this.self.classList.add(newClass);
          console.log(newClass);
        }
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass(existsClass) {
      if (this.isNodeList) {
        for (var i = 0; i < this.self.length; i++) {
          if (existsClass instanceof Array) {
            var _self$i$classList2, _console3;

            (_self$i$classList2 = this.self[i].classList).remove.apply(_self$i$classList2, _toConsumableArray(existsClass));
            (_console3 = console).log.apply(_console3, _toConsumableArray(existsClass));
          } else {
            this.self[i].classList.remove(existsClass);
            console.log(existsClass);
          }
        }
      } else {
        if (existsClass instanceof Array) {
          var _self$classList2, _console4;

          (_self$classList2 = this.self.classList).remove.apply(_self$classList2, _toConsumableArray(existsClass));
          (_console4 = console).log.apply(_console4, _toConsumableArray(existsClass));
        } else {
          this.self.classList.remove(existsClass);
          console.log(existsClass);
        }
      }
    }
    /*******************************************************
     *                         CSS                         *
     *******************************************************
     * setting or retrieving css value
     * @property prop The css property needed to work with *
     * @property value The value for the property
     *******************************************************/

  }, {
    key: 'css',
    value: function css(cssProperty, value) {
      if (arguments.length > 1) {
        /******************************************
         * If deal with a list of elements        * 
         * eg. select elements by class attribute *
         * then loop through all element and      *
         * setting css style for each selected element *
         * */
        if (this.isNodeList) {
          // chrome has problem with for..of loop! => [Symbol.iterator] is not a function
          //for (const elem of this.self) {
          //  console.log(elem);
          //  this.setStyle(elem, cssProperty, value);          
          //}
          for (var i = 0; i < this.self.length; i++) {
            console.log(this.self[i]);
            this.setStyle(this.self[i], cssProperty, value);
          }
        } else {
          this.setStyle(this.self, cssProperty, value);
        }
      } else {
        /**
         * retrieving value of the property
         * Add a type check for the property provided => String
         * */
        if (typeof cssProperty != "string") throw TypeError('Not a string');
        if (this.isNodeList) {
          /**
           * return first selected element's style
           */
          for (var _i = 0; _i < this.self.length; _i++) {
            console.log(this.self[_i]);
            return window.getComputedStyle(this.self[_i]).getPropertyValue(cssProperty);
          }
        } else {}
        return window.getComputedStyle(this.self).getPropertyValue(cssProperty);
      }
    }
  }, {
    key: 'setStyle',
    value: function setStyle(elem, cssProperty, value) {
      switch (cssProperty) {
        case 'backgroundColor':
        case 'bgColor':
          elem.style.backgroundColor = value;
          break;
        case 'borderBottomColor':
          elem.style.borderBottomColor = value;
          break;
        case 'borderTopColor':
          elem.style.borderTopColor = value;
          break;
        default:
          alert('Css does not have such property.');
      }
    }
  }, {
    key: 'self',
    get: function get() {
      return this.elem;
    }
  }, {
    key: 'isNodeList',
    get: function get() {
      if (this.elem instanceof NodeList) return true;
      return false;
    }
  }, {
    key: 'class',
    get: function get() {
      return this.self.classList;
    }
  }]);

  return Selector;
}();