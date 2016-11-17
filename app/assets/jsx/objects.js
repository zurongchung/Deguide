'use strict';
$.Utilities = (function(){
    Utilities = function () {
        this.sTID = function (s){return app.stringIDToTypeID(s);};
        this.cTID = function (c) {return app.charIDToTypeID(c);};
    }
    return Utilities;
    
})();
 $.Deguide = {
   version: '1.0.9'
 };