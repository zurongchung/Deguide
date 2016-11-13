
 window.onload = () => {
   /**
    * When application is up and running
    * get application default units
    */
    const extensionUI = new UI();
    extensionUI.initialTheme();
    extensionUI.attachListener();
    // listen application UI theme change event
   CSLibrary.addEventListener("com.adobe.csxs.events.ThemeColorChanged",
    () => {extensionUI.syncThemeListener();});
    CSLibrary.evalScript('units()', _rst => {
      //alert('action '+ _rst);
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
