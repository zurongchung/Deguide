const CSLibrary = new CSInterface();
class UI {
  constructor() {
    this.appUnit = 'px';    
    this.valueIsNaN = /[^\d]/;
    this.valueIsNum = /\d/;
    [this.docWidth, this.docHeight] = [0, 0];
    this.theme_class = new Map([
      ['nav', 'ps_light_nav'],
      ['li.menu_item', ['ps_light_divide', 'ps_light_nav_menu_item']],
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
    const elemLists = $('input[name="guide_value"]', 'all').self;
    for (let i=0; i < elemLists.length; i++) {      
      elemLists[i].addEventListener('blur', e => {
        if (!this.valueIsNaN.test(elemLists[i].value) && elemLists[i].value != '') {
          elemLists[i].value += this.appUnit;
        }
      }, false);
    }
  }
  createGuides(canvasWidth, canvasHeight) {
    let guideProp = this.getValues();
    let guide = new DeGuide(canvasWidth, canvasHeight, ...guideProp);
    let rows = guide.coordinatesHorizontalGuides;
    let columns = guide.coordinatesVerticleGuides;

    if (typeof rows != 'undefined') {
      for (const dy of rows) {
        CSLibrary.evalScript(`horizontal(${dy})`, () => console.log('h +1'));        

      }
    }
    if (typeof columns != 'undefined') {
      for (const dx of columns) {
        CSLibrary.evalScript(`vertical(${dx})`, () => console.log('v +1'));
      }
    }
  }
  gen() {
    $('#gen-btn').click(e => {
      CSLibrary.evalScript('getDocumentWidth()', w => {
        CSLibrary.evalScript('getDocumentHeight()', h => {
          [this.docWidth, this.docHeight] = [parseInt(w), parseInt(h)];
          this.createGuides(this.docWidth, this.docHeight);
        });
      });
    });
  }
  clearButtonListener() {
    $('.clear_btn').click(e => {
      CSLibrary.evalScript('clearSelectedArtboardGuides()', ()=>{});
    });
  }
  toggleGuidesVisibility() {
    CSLibrary.evalScript('toggleGuidesVisibility()', ()=>{});
  }
  quickGuide() {
  }
  
  attachListener() {
    this.valueFieldListener();
    this.clearButtonListener();
  }
  initialTheme() {
    let appTheme = new Theme();
    $('body').css('backgroundColor', appTheme.rgbHex);
    // else use default dark theme
    if (appTheme.isLightTheme) {
      this.lightTheme();
    }
  }
  syncThemeListener() {
    let appTheme = new Theme();
    $('body').css('backgroundColor', appTheme.rgbHex);
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