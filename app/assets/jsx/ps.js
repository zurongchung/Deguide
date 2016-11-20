'use strict';
// constants
var NoDialog = DialogModes.NO;
//====== ps event id and class id ======
var idclearAllGuides = _.sTID('clearAllGuides');
var idclearSelectedArtboardGuides = _.sTID('clearSelectedArtboardGuides');
var idToggleGuides = _.sTID('toggleGuides');
var idToggleArtboardGuides = _.sTID('toggleArtboardGuides');
var idArtboardGuide = _.sTID('newGuideLayout');
var idguideTargetSelectedArtboards = _.sTID( "guideTargetSelectedArtboards" );
var Origin = {
  left  :    'left',
  right :   'right',
  center:  'center',
};
/**
 * control the starting point
 * should start from left to the right
 * or right to left or start from center
 * */ 
Origin.origin = function ( to ) {
  switch ( to ) {
    case 'left':     return Origin.right;
    case  'both':   return Origin.center;
    default     :    return Origin.left;
  }
};