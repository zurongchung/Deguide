'use strict';

var Utilities = function Utilities() {
    //====== convenient functions ======
    this.sTID = function (s) {
        return app.stringIDToTypeID(s);
    };
    this.cTID = function (c) {
        return app.charIDToTypeID(c);
    };
};
var _ = new Utilities();
//====== ps event id and class id ======
var idclearAllGuides = _.sTID('clearAllGuides');
var idclearSelectedArtboardGuides = _.sTID('clearSelectedArtboardGuides');
var idToggleGuides = _.cTID('Tgld'); // menu_item id

var NoDialog = DialogModes.NO;
var clearAllGuides = function clearAllGuides() {
    //====== clear all guides on the document
    app.executeAction(idclearAllGuides, void 0, NoDialog);
};
var clearSelectedArtboardGuides = function clearSelectedArtboardGuides() {
    //====== clear all guides on the selected artboard on the document  
    app.executeAction(idclearSelectedArtboardGuides, void 0, NoDialog);
};
var units = function units() {
    //======  retrives application default unit
    return app.preferences.rulerUnits.toString();
};
var getDocumentWidth = function getDocumentWidth() {
    return app.activeDocument.width;
};
var getDocumentHeight = function getDocumentHeight() {
    return app.activeDocument.height;
};
var horizontal = function horizontal(unitValue) {
    app.activeDocument.guides.add(Direction.HORIZONTAL, unitValue);
};
var vertical = function vertical(unitValue) {
    app.activeDocument.guides.add(Direction.VERTICAL, unitValue);
};
var isAnyGuideLine = function isAnyGuideLine() {
    return app.activeDocument.guides.length > 0 ? true : false;
};
var toggleGuidesVisibility = function toggleGuidesVisibility() {
    app.runMenuItem(idToggleGuides);
};