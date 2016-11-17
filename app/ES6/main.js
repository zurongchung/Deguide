var _ext = {
  fire: function () {
    /**
    * When application is up and running
    * get application default units
    */
    const extensionUI = new UI();
    extensionUI.initialTheme();
    extensionUI.attachListener();
    // listen application UI theme change event
    CSLibrary.addEventListener("com.adobe.csxs.events.ThemeColorChanged", () => {
      extensionUI.syncThemeListener();
    });
  },
  initUnits: function() {
    CSLibrary.evalScript('units()', _rst => {
      //alert('action '+ _rst);
    });
  }
};
$(document).ready(() => {
  _ext.fire();
  _ext.initUnits();
});

var getUnit = function (defaultUnit) {
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
