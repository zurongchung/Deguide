const csi = new CSInterface();
class UI {
  constructor(unit) {
    this.unit = unit;
    this.quickGuideIDs = ['left', 'row-mid', 'top', 'bottom',
    'col-mid', 'right'];
    this.IDs = ['width','columns', 'margin_bottom', 
    'margin_right', 'horiz_gutters','height', 'rows', 
    'margin_top', 'margin_left', 'vert_gutters'];
    //this.elements = this.getValueFieldElements();
    //this.pathParent = $('#groupGuides').self;
    this.againstNaN = /[^\d]/;
    this.againstNumbers = /\d/;
    this.values = [];
    [this.docWidth, this.docHeight] = [0, 0];

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
        csi.evalScript(`horizontal(${dy})`, () => console.log('h +1'));        

      }
    }
    if (typeof columns != 'undefined') {
      for (const dx of columns) {
        csi.evalScript(`vertical(${dx})`, () => console.log('v +1'));
      }
    }
  }
  gen() {
    $('#gen-btn').click(e => {
      csi.evalScript('getDocumentWidth()', w => {
        csi.evalScript('getDocumentHeight()', h => {
          [this.docWidth, this.docHeight] = [parseInt(w), parseInt(h)];
          this.createGuides(this.docWidth, this.docHeight);
        });
      });
    });
  }
  clear() {
    $('#clear-btn').click(e => {
      // Code to remove all guides
      alert(csi.hostEnvironment.appSkinInfo.panelBackgroundColor.color);
    });
  }
  quickGuide() {
    for (const id of this.quickGuideIDs) {
      $(`#${id}`).click(e =>{
         
      });
    }
  }
  
  attachListener() {
    this.gen();
    this.clear();
    this.quickGuide();
  }
} 