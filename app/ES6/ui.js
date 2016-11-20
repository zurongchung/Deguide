const CSLibrary = new CSInterface();
class UI {
  constructor() {
    this.appUnit = 'px';    
    this.valueIsNaN = /[^\d]/;
    this.valueIsNum = /\d/;
    [this.docWidth, this.docHeight] = [0, 0];
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
    this.appThemeWasLight = false;
    this.appThemeWasDark = true;
  }

  get unit() {
    return this.appUnit;
  }
  set unit(unit) {
    this.appUnit = unit;
  }
  valueFieldListener() {
    let unit = this.unit;
    $('input[name="guide_value"]').blur( function() {
      // not using arrow function because arrow func does't bind Lexical `this`
      // because jquery need $(this) 
      $(this)[0].value += unit;
    });
  }
  gen() {
    $('.gen_btn').click(e => {
      var to = 'right';
      CSLibrary.evalScript(`Deguide.preset.a()`, ()=>{});
    });
  }
  clearButtonListener() {
    $('.clear_btn').click(e => {
      CSLibrary.evalScript('Deguide.clearAll()', (_rst)=>{});
    });
  }
  toggleVisibilityListener() {
    $('.logo_link').click(e => {
      CSLibrary.evalScript('Deguide.test()', ()=>{});
    });
  }
  setBorderListener() {
    $('.set_border').click(function() {
      let order = parseInt($(this).css('order'));
      CSLibrary.evalScript(`Deguide.canvasBorder(${order})`, ()=>{});
    });
  }
  attachListener() {
    this.gen();
    this.setBorderListener();
    this.valueFieldListener();
    this.clearButtonListener();
    this.toggleVisibilityListener();
  }
  initialTheme() {
    let appTheme = new Theme();
    $('body').css('background-color', appTheme.rgbHex);
    // else use default dark theme
    if (appTheme.isLightTheme) {
      this.lightTheme();
    }
  }
  syncThemeListener() {
    let appTheme = new Theme();
    $('body').css('background-color', appTheme.rgbHex);
    if (!this.appThemeWasLight && this.appThemeWasDark && appTheme.isLightTheme) {
      this.lightTheme();
    }else if (!this.appThemeWasDark && this.appThemeWasLight && !appTheme.isLightTheme) {
      this.darkTheme();
    }

  }
  lightTheme() {
    for (let [elem, attr] of this.theme_class) {
        $(elem).addClass(attr);
      }
    console.log('using light theme');
    this.appThemeWasLight = true;
    this.appThemeWasDark = false;
  }
  darkTheme() {
    for (let [elem, attr] of this.theme_class) {
        $(elem).removeClass(attr);
    }
    console.log('using dark theme');
    this.appThemeWasLight = false;
    this.appThemeWasDark = true;    
  }
} 