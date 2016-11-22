const CSLibrary = new CSInterface();
const csi_el    = ( _ins, _cab = ()=>{} ) => { CSLibrary.evalScript( _ins, _cab ); };
class UI {
  constructor() {
    this.valueContainNaN            =        /[^\d]/;
    this.valueMustBeNum             =           /\d/;
    [this.docWidth, this.docHeight] =         [0, 0];
    this.appThemeWasDark            =           true;
    this.appThemeWasLight           =          false;    
    this.theme_class = new Map([
      ['nav', 'ps_light_nav'],
      ['li.menu_item', 'ps_light_divide ps_light_nav_menu_item'],
      ['input[name="guide_value"]', 'ps_light_guide_value'],
      ['.guide_value', 'ps_light_guide_value_input'],
      ['.guide_icon', 'ps_light_guide_icon'],
      ['.cls-2', 'ps_light_icon_cls2_fill'],
      ['.under_border:not(#bottom)', 'ps_light_margin_under_border'],
      ['#bottom', 'ps_light_margin_under_border_top'],
      ['.strip', 'ps_light_strip'],
      ['.hexgon_btn_theme', 'ps_light_hexgon_btn_theme'],
      ['.hexgon_btn_frame_theme', 'ps_light_hexgon_btn_frame_theme'],
      ['.text_on_btn', 'ps_light_text_on_btn'],
    ]);
  }
  inputListener() {
    const _this = this;
    $('input[name="guide_value"]').blur( function() {
      // not using arrow function because arrow func does't bind Lexical `this`
      // because jquery need $(this)
      let $this = $(this)[0]; 
      csi_el( 'Deguide.unitType()', _unit => {
        if ( _this.valueMustBeNum.test( $this.value ) && !_this.valueContainNaN.test($this.value) )
          $this.value += _unit; } );
    });
  }
  gen() {
    $('.gen_btn').click(e => {
      var to = 'left';
      csi_el( `Deguide.preset.fibonacci('${to}')` ); });
  }
  clearButtonListener() {
    $('.clear_btn').click(e => { csi_el( 'Deguide.clearAll()' ); });
  }
  toggleVisibilityListener() {
    $('.logo_link').click(e => {  csi_el( 'Deguide.test()' ); });
  }
  setBorderListener() {
    $('.set_border').click(function() {
      let order = parseInt($(this).css('order'));
      csi_el( `Deguide.canvasBorder(${order})` ); });
  }
  attachListener() {
    this.gen();
    this.setBorderListener();
    this.inputListener();
    this.clearButtonListener();
    this.toggleVisibilityListener();
  }
  initialTheme() {
    let appTheme = new Theme();
    $('body').css( 'background-color', appTheme.rgbHex );
    // else use default dark theme
    if ( appTheme.isLightTheme ) 
      this.lightTheme();
    
  }
  syncThemeListener() {
    let appTheme = new Theme();
    $('body').css( 'background-color', appTheme.rgbHex );
    if ( !this.appThemeWasLight && this.appThemeWasDark && appTheme.isLightTheme )
      this.lightTheme();
    if ( !this.appThemeWasDark && this.appThemeWasLight && !appTheme.isLightTheme )
      this.darkTheme();
  }
  lightTheme() {
    for ( let [elem, attr] of this.theme_class )
        $(elem).addClass(attr);
    console.log('using light theme');
    this.appThemeWasLight = true;
    this.appThemeWasDark = false;
  }
  darkTheme() {
    for ( let [elem, attr] of this.theme_class )
        $(elem).removeClass(attr);
    console.log('using dark theme');
    this.appThemeWasLight = false;
    this.appThemeWasDark = true;    
  }
} 