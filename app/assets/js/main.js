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
  /**
   * Load JSX file into the scripting context of the product. All the jsx files in 
   * folder [ExtensionRoot]/jsx will be loaded. 
   */
  loadJSX();
  _ext.fire();
  _ext.initUnits();
});
var loadJSX = function loadJSX() {
  var csLib = new CSInterface();
  var extRoot = csLib.getSystemPath(SystemPath.EXTENSION) + '/jsx/';
  csLib.evalScript('$._ext_ps.evalFiles("' + extRoot + '" )');
};