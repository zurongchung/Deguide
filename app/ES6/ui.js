const CSLibrary = new CSInterface();
class UI {
  constructor() {
    //this.elements = this.getValueFieldElements();
    //this.pathParent = $('#groupGuides').self;
    this.appUnit = 'px';    
    this.againstNaN = /[^\d]/;
    this.againstNumbers = /\d/;
    this.values = [];
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
  get unit() {
    return this.appUnit;
  }
  set unit(unit) {
    this.appUnit = unit;
  }
  getValueFieldElements() {
    let node = [];
    for (let target of this.IDs) {
      let input_tag = $(`#${target}`).self;
      node.push(input_tag);
      $(`#${target}`).blur(e => {
        if (!(this.againstNaN.test(input_tag.value)) && input_tag.value != '') {
          input_tag.value += this.unit;
        }
      });
    }
    return node;
  }
  /**
   * Have values from UI panel
   */
  getValues() {
    this.values = [];
    for (let node of this.elements) {
      let value = 0;
      if (this.againstNumbers.test(node.value)) {
        value = parseInt(node.value);
      }
      this.values.push(value);
    }
    return this.values;
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
  clear() {
    $('#clear-btn').click(e => {
      // Code to remove all guides
    });
  }
  quickGuide() {
  }
  
  attachListener() {
    this.gen();
    this.clear();
    this.quickGuide();
  }
} 