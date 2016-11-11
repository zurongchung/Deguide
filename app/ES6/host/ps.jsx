//====== ps event id and class id ======
var idclearAllGuides = app.stringIDToTypeID('clearAllGuides');
var idclearSelectedArtboardGuides = app.stringIDToTypeID('clearSelectedArtboardGuides');


const NoDialog = DialogModes.NO;
//====== clear all guides on the document
function clearAllGuides() {
app.executeAction(idclearAllGuides, undefined, NoDialog);
}
//====== clear all guides on the selected artboard on the document
function clearSelectedArtboardGuides() {
app.executeAction(idclearSelectedArtboardGuides, void 0, NoDialog);
}
//======  retrives application default unit

function units() {
return app.preferences.rulerUnits.toString();
}
/**
 * retrive photoshop document's width and height
 */
function getDocumentWidth() {
return app.activeDocument.width;
}
function getDocumentHeight() {
return app.activeDocument.height;
}
/**
 * Photoshop guides functions
 */
function addGuide() {
var desc = new ActionDescriptor();
var cGuide = 'gid'; 
return app.charIDToTypeID(cGuide);
}
function horizontal(unitValue){
app.activeDocument.guides.add(Direction.HORIZONTAL, unitValue);

}
function vertical(unitValue) {
app.activeDocument.guides.add(Direction.VERTICAL, unitValue);

}
function isAnyGuideLine() {
if (app.activeDocument.guides.length > 0) {
    return true;
}
return false;
}
/**
 * Application and Document check
 * before running any functionality
 * of extension
 */
function isDocActive() {
}