const $ = identifier => {
  /******************************
   * Select element with and ID *
   * ****************************/
  let elem = new Object();
  if(/^#/.test(identifier)){
    elem = document.querySelector(identifier);
  }else{
    elem = document.querySelectorAll(identifier);
  }
  if(elem == null) {
    alert(`Element => ${identifier}: no such element on this page`);
    return;
  }
  return new Selector(elem);
}
class Selector{
  constructor(element) {
    this.elem = element;
  }
  get self() {
    return this.elem;
  }
  get isNodeList() {
    if (this.elem  instanceof NodeList) return true;
    return false;
  }
  /*********
   * Event *
   *********/
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
  /******************
   * HTML Attribute *
   * ****************/
  get class() {
    return this.self.classList;
  }
  addClass(newClass) {
    
    if (this.isNodeList){
      for (let i =0; i < this.self.length; i++) {
        if (newClass instanceof Array) {
          this.self[i].classList.add(...newClass);
          console.log(...newClass);          
        }else {
          this.self[i].classList.add(newClass);
          console.log(newClass);                  
        }
      }
    }else {
      if (newClass instanceof Array) {
        this.self.classList.add(...newClass);
        console.log(...newClass);        
      }else {
        this.self.classList.add(newClass);
        console.log(newClass);
      }
    }
  }
  /*******************************************************
   *                         CSS                         *
   *******************************************************
   * setting or retrieving css value
   * @property prop The css property needed to work with *
   * @property value The value for the property
   *******************************************************/
  css(cssProperty, value) {
    if (arguments.length > 1) {
      /******************************************
       * If deal with a list of elements        * 
       * eg. select elements by class attribute *
       * then loop through all element and      *
       * setting css style for each selected element *
       * */
      if (this.isNodeList) {
        // chrome has problem with for..of loop! => [Symbol.iterator] is not a function
        //for (const elem of this.self) {
        //  console.log(elem);
        //  this.setStyle(elem, cssProperty, value);          
        //}
        for (let i =0; i < this.self.length; i++) {
          console.log(this.self[i]);
          this.setStyle(this.self[i], cssProperty, value);
        }
      }else {
        this.setStyle(this.self, cssProperty, value);
      }
    }else {
      /**
       * retrieving value of the property
       * Add a type check for the property provided => String
       * */
      if (typeof cssProperty != "string") throw TypeError('Not a string');
      if (this.isNodeList) {
        /**
         * return first selected element's style
         */
        for (let i =0; i < this.self.length; i++) {
          console.log(this.self[i]);
          return window.getComputedStyle(this.self[i]).getPropertyValue(cssProperty);          
        }
      }else {
      }
        return window.getComputedStyle(this.self).getPropertyValue(cssProperty);
      
    }
  }
  setStyle(elem, cssProperty, value) {
    switch (cssProperty) {
      case 'backgroundColor':
      case 'bgColor':
        elem.style.backgroundColor = value;
        break;
      case 'borderBottomColor':
        elem.style.borderBottomColor = value;
        break;
      case 'borderTopColor':
        elem.style.borderTopColor = value;
        break;
      default:
        alert('Css does not have such property.');
    }
  }
}