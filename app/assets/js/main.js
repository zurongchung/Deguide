'use strict';

var _ext = {
  fire: function fire() {
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
  },
  initUnits: function initUnits() {
    CSLibrary.evalScript('units()', function (_rst) {
      //alert('action '+ _rst);
    });
  }
};
$(document).ready(function () {
  _ext.fire();
  _ext.initUnits();
});

var getUnit = function getUnit(defaultUnit) {
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
};