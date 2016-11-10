'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.onload = function () {
  /**
   * When application is up and running
   * get application default units
   */
  var extensionUI = new UI();
  extensionUI.initialTheme();
  extensionUI.attachListener();
  // listen application UI theme change event
  CSLibrary.addEventListener("com.adobe.csxs.events.ThemeColorChanged", function () {
    extensionUI.syncThemeListener();
  });
  CSLibrary.evalScript('units()', function (_rst) {
    alert(typeof _rst === 'undefined' ? 'undefined' : _typeof(_rst));
  });
};
function getUnit(defaultUnit) {
  switch (defaultUnit) {
    case 'Units.INCHES':
      return 'in';
    case 'Units.POINTS':
      return 'pt';
    case 'Units.CM':
      return 'cm';
    case 'Units.MM':
      return 'mm';
    default:
      return 'px';
  }
}