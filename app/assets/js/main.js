'use strict';

window.onload = function () {
  /**
   * When application is up and running
   * get application default units
   */
  csi.evalScript('units()', function (rulerUnits) {
    var ui = new UI(getUnit(rulerUnits));
    ui.attachListener();
  });

  /**
   * set a listener watching for the change of 
   * application's interface appearance
   */
  // not working
  new CSInterface().addEventListener("com.adobe.csxs.events.ThemeColorChanged", themeChangeEventListener);

  themeChangeEventListener();
};

function getUnit(defaultUnit) {
  switch (defaultUnit) {
    case 'Units.PIXELS':
      return 'px';
    case 'Units.INCHES':
      return 'in';
    case 'Units.POINTS':
      return 'pt';
    case 'Units.CM':
      return 'cm';
    case 'Units.MM':
      return 'mm';
    default:
      alert('unit impossible error');
  }
};
function themeChangeEventListener() {
  //let defaultColor = '#535353'; lighter
  //let defaultColor = '#444444'; slight lighter
  //let defaultColor = '#282828';
  var uicolor = new Theme().rgbHex;
  $('body').css('backgroundColor', uicolor);
  $('.de-panel').css('backgroundColor', uicolor);
}