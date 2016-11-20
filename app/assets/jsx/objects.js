'use strict';
$.Utilities = function(){
    var Utilities = function () {
        this.sTID = function (s){return app.stringIDToTypeID(s);};
        this.cTID = function (c) {return app.charIDToTypeID(c);};
    }
    return Utilities;
}();
$.Deguide = function() {
    var Deguide = function() {
        this.version = '1.00.5';
        this.h       = Direction.HORIZONTAL;
        this.v       = Direction.VERTICAL;
        this.docWidth = parseInt(app.activeDocument.width);
        this.docHeight= parseInt(app.activeDocument.height);
        this.hasAny   = function() { return app.activeDocument.guides.length > 0 ?  true : false; };
        this.preset   = this.Preset(); 
    };
    return Deguide;
}();


$.Deguide.prototype.addGuide = function(orientation, move) {
    app.activeDocument.guides.add(orientation, move + this.unitType() );
};
$.Deguide.prototype.clearAll = function() {
    if (!this.hasAny()) return;
    app.executeAction(idclearAllGuides, void 0, NoDialog); 
};
$.Deguide.prototype.clearSelectedArtboard= function() {
    if (!this.hasAny()) return;
    app.executeAction(idClearSelectedArtboardGuides, void 0, NoDialog)
};
$.Deguide.prototype.toggleVisibility = function() {
    if (!this.hasAny()) return;
    app.runMenuItem(idToggleGuides);
};
$.Deguide.prototype.unitType = function() {
    var unit = app.preferences.rulerUnits;
    switch (unit) {
    case Units.INCHES:
        return 'in';
    case Units.CM:
        return 'cm';
    case Units.MM:
        return 'mm';
    case Units.POINTS:
        return 'pt';
    case Units.PERCENT:
        return '%';
    case Units.PICAS:
        return 'pc';
    default:
        return 'px';
    }
};
$.Deguide.prototype.canvasBorder = function(order) { 
    var orientation, move;
    switch (order)  {
        case 1: // left
            orientation = this.v; move = 0;
        break;
        case 2: // vertical center
            orientation = this.v; move = this.docWidth /2;
        break;
        case 3: // right
            orientation = this.v; move = this.docWidth;
        break;
        case 4: // top
            orientation = this.h; move = 0;
        break;
        case 5: // horizontal center
            orientation = this.h; move = this.docHeight /2;
        break;
        default:
            orientation = this.h; move = this.docHeight;
    }
    this.addGuide(orientation, move);
};
$.Deguide.prototype.Preset = function() {
    var _this = this;
    var preset = {};
    preset.fibonacci = function(){
        var boundary = _this.docWidth;
        var pos=[], n_next, pre=8, next=13;
        (function(){
        for (;(next+pre) < boundary;) {
            n_next = next + pre;
            pos.push(n_next);
            pre  = next;
            next = n_next;                
        }
        // test feature
        // remove the last one guide line 
        // if the space between it and the boundary is
        // less then the space between it and the one before it
        if ((boundary - pos[pos.length-1]) < (pos[pos.length-1] - pos[pos.length-2]))
            pos.pop();
        })();
        try{
            for (var p=0; p < pos.length; p++) {
                _this.addGuide(_this.v, pos[p]);
            }
        }catch(e) { console.log('Exception: ' +e); }
    };
    return preset;
};
/**
 * External usage
 * Without keyword 'var'. Not limited in `file` scope
 */
var   _ = new $.Utilities();
Deguide = new $.Deguide();  // an interface instance of Deguide
