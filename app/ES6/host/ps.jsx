'use strict'

class Util {
    constructor() {}
    sTID (s){return app.stringIDToTypeID(s);};
    cTID (c) {return app.charIDToTypeID(c);};    
};
var _ = new Util();
//====== ps event id and class id ======
var idclearAllGuides = _.sTID('clearAllGuides');
var idclearSelectedArtboardGuides = _.sTID('clearSelectedArtboardGuides');
var idToggleGuides = _.cTID('Tgld'); // menu_item id

var NoDialog = DialogModes.NO;
Deguide.clearAllGuides = function () {
//====== clear all guides on the document
    app.executeAction(idclearAllGuides, void 0, NoDialog);
};
Deguide.clearSelectedArtboardGuides = function () {
//====== clear all guides on the selected artboard on the document  
    app.executeAction(idclearSelectedArtboardGuides, void 0, NoDialog);
};
Deguide.toggleGuidesVisibility = function() {
//====== display or hidden guides
    app.runMenuItem(idToggleGuides);
};
Deguide.units = function () {
//======  retrives application default unit
    return app.preferences.rulerUnits.toString();
};
Deguide.docWidth = function () {
    return app.activeDocument.width;
};
Deguide.docHeight = function () {
    return app.activeDocument.height;
};
Deguide.horizontal = function (unitValue){
    app.activeDocument.guides.add(Direction.HORIZONTAL, unitValue);
};
Deguide.vertical = function (unitValue) {
    app.activeDocument.guides.add(Direction.VERTICAL, unitValue);
};
Deguide.haveAny = function () {
    return app.activeDocument.guides.length > 0 ?  true : false;
};
