/**
 * retrives application default unit
 */

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