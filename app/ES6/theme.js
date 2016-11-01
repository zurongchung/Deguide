
class Theme {
  constructor() {
    this.hostEnv = new CSInterface().getHostEnvironment();
    this.skin   = this.hostEnv.appSkinInfo.appBarBackgroundColor;
    this.red    = this.skin.color.red;
    this.green  = this.skin.color.green;
    this.blue   = this.skin.color.blue;
    this.alpha  = this.skin.color.alpha;
  }
  getHue(value) {
    return Math.round(value);
  }
  get rgbHex() {
    let [r,g,b] = [this.getHue(this.red), this.getHue(this.green), this.getHue(this.blue)];
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }
  changeExtensionAppearance() {

  }
  
}