const $ = prop => {
  const el = document.querySelector(prop);
  return new Selector(el);
}
class Selector{
  constructor(element) {
    this.el = element;
  }
  get self() {
    return this.el;
  }
  
 on(eventType,callback, bubbles=false) {
   this.self.addEventListener(eventType, callback, bubbles);
 }
  /**
   * click event
   * Bubbles up behavior is false by default
   */
  click(callback, bubbles=false) {
    this.self.addEventListener('click', callback, bubbles);
  }
  /**
   * blur event
   * Bubbles up behavior is false by default
   */
  blur(callback, bubbles=false) {
    this.self.addEventListener('blur', callback, bubbles);
  }
  /**
   * setting or retrieving css value
   * @property prop The css property needed to work with
   * @property value The value for the property
   */
  get style() {
    return this.self.style;
  }
  css(prop, value) {
    if (arguments.length > 1) {
      /**
       * Setting value for the property
       */
      this.setStyle(prop, value);
    }else {
      /**
       * retrieving value of the property
       * Add a type check for the property provided => String
       * */
      if (typeof cssProp != "string") throw TypeError('Not a string');
      return parseInt(window.getComputedStyle(this.self).getPropertyValue(cssProp));
      
    }
  }
  setStyle(propString, value) {
    switch (propString) {
      case 'backgroundColor':
      case 'bgc':
        this.style.backgroundColor = value;
        break;
      default:
        alert('Css does not have such property.');
    }
  }
}