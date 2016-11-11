'use strict';

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
    alert('action ' + _rst);
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