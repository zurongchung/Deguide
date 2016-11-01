"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppSkin = new CSInterface();
var hostEnv = AppSkin.getHostEnvironment();

var Theme = function () {
  function Theme() {
    _classCallCheck(this, Theme);

    this.skin = hostEnv.appSkinInfo.appBarBackgroundColor;
    this.red = this.skin.color.red;
    this.green = this.skin.color.green;
    this.blue = this.skin.color.blue;
    this.alpha = this.skin.color.alpha;
  }

  _createClass(Theme, [{
    key: "getHue",
    value: function getHue(value) {
      return Math.round(value);
    }
  }, {
    key: "changeExtensionAppearance",
    value: function changeExtensionAppearance() {}
  }, {
    key: "rgbHex",
    get: function get() {
      var _ref = [this.getHue(this.red), this.getHue(this.green), this.getHue(this.blue)];
      var r = _ref[0];
      var g = _ref[1];
      var b = _ref[2];

      return "#" + r.toString(16) + g.toString(16) + b.toString(16);
    }
  }]);

  return Theme;
}();