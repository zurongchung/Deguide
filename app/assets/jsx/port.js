'use strict';
if (typeof($) === 'undefined') $ = {};
$._ext_ps = {
  evalFile: function(path) {
    try{
      $.evalFile(path); 
    }catch(e) { alert("Exception: " + e); }
  },
  evalFiles: function(jsxFolderPath) {
    var folder = new Folder(jsxFolderPath);
    if (folder.exists) {
      var jsxFiles = folder.getFiles('*.jsx');
      for (var f=0; f < jsxFiles.length; f++) {
        var jsxFile = jsxFiles[f];
        $.evalFile(jsxFile);
      }
    }
  }
};