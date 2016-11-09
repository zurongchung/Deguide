
 window.onload = () => {
   /**
    * When application is up and running
    * get application default units
    */
    csi.evalScript('units()', rulerUnits => { 
      //const ui = new UI( getUnit(rulerUnits) );
      //ui.attachListener();
    });
  
   /**
    * set a listener watching for the change of 
    * application's interface appearance
    */
   new CSInterface().addEventListener("com.adobe.csxs.events.ThemeColorChanged",
    themeChangeEventListener);

    themeChangeEventListener();
 };

function getUnit(defaultUnit) {
  switch (defaultUnit) {
    case 'Units.PIXELS':
    return 'px';
    case 'Units.INCHES':
    return 'in';
    case 'Units.POINTS':
    return 'pt';
    case 'Units.CM':
    return 'cm';
    case 'Units.MM':
    return 'mm';
    default:
    alert('unit impossible error');
  }
}
function themeChangeEventListener() {
  let uicolor = new Theme();
  changeTheme(uicolor);
}
  function changeTheme(color) {
    let lighter      = color.rgbHex;
    let bg = color.compute(-5).rgbHex;
    $('body').css('backgroundColor', '#f0f0f0');
    // nav bar
    $('nav').addClass('ps_light_nav');
    $('li.menu_item').addClass(['ps_light_divide', 'ps_light_nav_menu_item']);
    // form input value and icons
    $('input[name="guide_value"]').addClass('ps_light_guide_value');
    $('.guide_value').addClass('ps_light_guide_value_input');
    $('.guide_icon').addClass('ps_light_guide_icon');
    $('.cls-2').addClass('ps_light_icon_cls2_fill');
    // form input margin 
    $('.under_border:not(#bottom)').addClass('ps_light_margin_under_border');
    $('#bottom').addClass('ps_light_margin_under_border_top');
    // button
    $('.strip').addClass('ps_light_strip');
    $('.hexgon_btn_theme').addClass('ps_light_hexgon_btn_theme');
    $('.hexgon_btn_frame_theme').addClass('ps_light_hexgon_btn_frame_theme');
    $('.text_on_btn').addClass('ps_light_text_on_btn');
  }