'use strict';
$.Utilities = function(){
    Utilities = function () {
        this.sTID = function (s){return app.stringIDToTypeID(s);};
        this.cTID = function (c) {return app.charIDToTypeID(c);};
    }
    return Utilities;
}();
 $.Deguide = {
   version: '1.00.5',
   h: Direction.HORIZONTAL,
   v: Direction.VERTICAL,
   addGuides            : function(orientation, value) { app.activeDocument.guides.add(orientation, value); },
   clearAll             : function() { app.executeAction(idclearAllGuides, void 0, NoDialog); },
   clearSelectedArtboard: function() { app.executeAction(idClearSelectedArtboardGuides, void 0, NoDialog) },
   toggleVisibility     : function() { app.runMenuItem(idToggleGuides); },
   unitType : function() { return app.preferences.rulerUnits.toString(); },
   docWidth : function() { return app.activeDocument.width; },
   docHeight: function() { return app.activeDocument.height; },
   hasAny   : function() { return app.activeDocument.guides.length > 0 ?  true : false; },
 };
 $.Deguide.Presets = {
     fibonacci: function() {
         var boundary = parseInt($.Deguide.docWidth()), pos=[], n_next, pre=8, next=13;
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
                app.activeDocument.guides.add($.Deguide.v, pos[p] + 'px');
            }
         }catch(e) { console.log('Exception: ' +e); }
     }
 };

 /**
  * External usage
  * Without keyword 'var'. Not limited in `file` scope
  */
 var   _ = new $.Utilities();
 Deguide = $.Deguide;