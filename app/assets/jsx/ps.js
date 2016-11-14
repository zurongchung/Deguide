'use strict'

var Utilities = function (){
    //====== convenient functions ======
        this.sTID = function (s){return app.stringIDToTypeID(s);};
        this.cTID = function (c) {return app.charIDToTypeID(c);};        
};
var _ = new Utilities();

//====== ps event id and class id ======
var idclearAllGuides = _.sTID('clearAllGuides');
var idclearSelectedArtboardGuides = _.sTID('clearSelectedArtboardGuides');
var idToggleGuides = _.cTID('Tgld'); // menu_item id

var NoDialog = DialogModes.NO;
var clearAllGuides = function () {
//====== clear all guides on the document
    app.executeAction(idclearAllGuides, void 0, NoDialog);
};
var clearSelectedArtboardGuides = function () {
//====== clear all guides on the selected artboard on the document  
    app.executeAction(idclearSelectedArtboardGuides, void 0, NoDialog);
};
var toggleGuidesVisibility = function() {
//====== display or hidden guides
    app.runMenuItem(idToggleGuides);
};
/**
var getMenuID = function () {
    var menuID = '';
    var evntId = _.cTID('slct');
    var idMenu = _.cTID('Mn  ');
    var idMnIt = _.cTID('MnIt');
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName(idMenu, 'menu');
    menuID = desc.getClass(idMenu);
    app.executeAction(eventId, desc, NoDialog);
    return menuID;
};
*/
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
