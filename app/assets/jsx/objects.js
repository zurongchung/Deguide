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
        this.docWidth = function() { return app.activeDocument.width; };
        this.docHeight= function() { return app.activeDocument.height; };
        this.hasAny   = function() { return app.activeDocument.guides.length > 0 ?  true : false; };
    };
    return Deguide;
}();


$.Deguide.prototype.addGuides = function(orientation, move) {
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
$.Deguide.prototype.Presets = { 
    fibonacci: function() {
        var boundary = parseInt(this.docWidth()), pos=[], n_next, pre=8, next=13;
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
        if ((boundary - pos[pos.length-1]) < (pos[pos.length-1] - pos[pos.length-2])) {
            pos.pop();
        }
        })();
        try{
            for (var p=0; p < pos.length; p++) {
            app.activeDocument.guides.add(this.v, pos[p] + this.unitType());
        }
        }catch(e) { console.log('Exception: ' +e); }
    },
};
$.Deguide.prototype.test = function() { alert('Presets') };
/**
 * External usage
 * Without keyword 'var'. Not limited in `file` scope
 */
var   _ = new $.Utilities();
Deguide = new $.Deguide();  // an interface instance of Deguide