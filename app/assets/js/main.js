'use strict';

/**
 * When application is up and running
 * get application default units
 */

if (csi.hostEnvironment.isAppOnline) {
  (function () {
    var unit = void 0;
    csi.evalScript('units()', function (rulerUnits) {
      switch (rulerUnits) {
        case 'Units.PIXELS':
          unit = 'px';
          break;
        case 'Units.INCHES':
          unit = 'in';
          break;
        case 'Units.POINTS':
          unit = 'pt';
          break;
        case 'Units.CM':
          unit = 'cm';
          break;
        case 'Units.MM':
          unit = 'mm';
          break;
        default:
          alert('unit impossible error');
      }
      var ui = new UI(unit);
      ui.attachListener();
    });
  })();
}