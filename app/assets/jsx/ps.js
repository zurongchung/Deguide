'use strict';
// constants
var NoDialog = DialogModes.NO;
//====== ps event id and class id ======
var idclearAllGuides                  =                     _.sTID('clearAllGuides');
var idclearSelectedArtboardGuides     =        _.sTID('clearSelectedArtboardGuides');
var idToggleGuides                    =                       _.sTID('toggleGuides');
var idToggleArtboardGuides            =               _.sTID('toggleArtboardGuides');
var idArtboardGuide                   =                     _.sTID('newGuideLayout');
var idguideTargetSelectedArtboards    =     _.sTID( "guideTargetSelectedArtboards" );
var Origin = {
  LEFT      :    'left',
  RIGHT     :   'right',
  CENTER    :  'center',
  TOP       :     'top',
  BOTTOM    :  'bottom',
};
/**
 * control the starting point
 * should start from left to the right
 * or right to left or start from center
 * */ 
Origin.origin = function ( to ) {
  to = ( typeof to !== undefined ) ? to : 'right';
  switch ( to.toLowerCase() ) {
    case  'right'   :    return   Origin.LEFT;
    case   'left'   :    return  Origin.RIGHT;
    case   'both'   :    return Origin.CENTER;
    case    'top'   :    return Origin.BOTTOM;
    case 'bottom'   :    return    Origin.TOP;
    default         :    return   Origin.LEFT;
  }
};