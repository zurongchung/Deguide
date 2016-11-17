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
  /**
   * Load JSX file into the scripting context of the product. All the jsx files in 
   * folder [ExtensionRoot]/jsx will be loaded. 
   */
  loadJSX();
  _ext.fire();
  _ext.initUnits();
});
const loadJSX = () => {
  const csLib = new CSInterface();
  const extRoot = csLib.getSystemPath(SystemPath.EXTENSION + '/jsx/');
  csLib.evalScript(`$._ext_ps.evalFiles( ${extRoot} )`);
}
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
