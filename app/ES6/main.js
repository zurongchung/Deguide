
 window.onload = () => {
   /**
    * When application is up and running
    * get application default units
    */
    const extensionUI = new UI();
    extensionUI.initialTheme();
    extensionUI.attachListener();

    CSLibrary.evalScript('units()', rulerUnits => { 
    });
    // listen application UI theme change event
   CSLibrary.addEventListener("com.adobe.csxs.events.ThemeColorChanged",
    () => {extensionUI.syncThemeListener();});

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
}
