
class Theme {
  constructor() {
    this.hostEnv = new CSInterface().getHostEnvironment();
    this.skin   = this.hostEnv.appSkinInfo.appBarBackgroundColor;
    // A copy of initial color that doesn't change
    this.red    = this.skin.color.red;
    this.green  = this.skin.color.green;
    this.blue   = this.skin.color.blue;
    // Modify this copy of color when need to
    this.r      = this.skin.color.red;
    this.g      = this.skin.color.green;
    this.b      = this.skin.color.blue;
    this.alpha  = this.skin.color.alpha;
  }
  get init() {
    this.r = this.red;
    this.g = this.green;
    this.b = this.blue;
    return this;
  }
  compute(factor) {
    this.r  += factor;
    this.g  += factor;
    this.b  += factor;
    return this;
  }
  getHue(value) {
    return Math.round(value);
  }
  get rgbHex() {
    let [r,g,b] = [this.getHue(this.r), this.getHue(this.g), this.getHue(this.b)];
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

  
}