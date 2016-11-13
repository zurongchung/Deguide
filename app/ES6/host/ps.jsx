'use strict'
var _ = new Utilities();
const Utilities = function () {
//====== convenient functions ======
    this.sTID = function (s){return app.stringIDToTypeID(s);};  
    this.cTID = function (c) {return app.charIDToTypeID(c);};
};
//====== ps event id and class id ======
const idclearAllGuides = _.sTID('clearAllGuides');
const idclearSelectedArtboardGuides = _.sTID('clearSelectedArtboardGuides');
const idToggleGuides = _.cTID('Tgld'); // menu_item id

const NoDialog = DialogModes.NO;
var clearAllGuides = function () {
//====== clear all guides on the document
    app.executeAction(idclearAllGuides, void 0, NoDialog);
};
var clearSelectedArtboardGuides = function () {
//====== clear all guides on the selected artboard on the document  
    app.executeAction(idclearSelectedArtboardGuides, void 0, NoDialog);
};
var units = function () {
//======  retrives application default unit
    return app.preferences.rulerUnits.toString();
};
var getDocumentWidth = function () {
    return app.activeDocument.width;
};
var getDocumentHeight = function () {
    return app.activeDocument.height;
};
var horizontal = function (unitValue){
    app.activeDocument.guides.add(Direction.HORIZONTAL, unitValue);
};
var vertical = function (unitValue) {
    app.activeDocument.guides.add(Direction.VERTICAL, unitValue);
};
var isAnyGuideLine = function () {
    return app.activeDocument.guides.length > 0 ?  true : false;
};
var toggleGuidesVisibility = function() {
    app.runMenuItem(idToggleGuides);
};