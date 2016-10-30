class DeGuide {
  constructor(canvasWidth, canvasHeight, width=0,col=0,mb=0,mr=0,hgutter=0, 
              height=0,row=0,mt=0,ml=0,vgutter=0) 
  {
    [this.rows, this.columns] = [row, col];
    /**
     * guide width and height
     */
    [this.w, this.h] = [width, height];
    /**
     * gutters
     */
    [this.horizgaps, this.vertgaps]  = [hgutter, vgutter];
    /**
     * Margins
     */
    [this.ml, this.mr] = [ml, mr];
    [this.mt, this.mb] = [mt, mb];
    /**
     * movement
     */
    [this.canvasWidth, this.canvasHeight] = [canvasWidth, canvasHeight];
    //[this.dx, this.dy] = [0, 0];
    [this.x, this.y]   = [this.canvasWidth, this.canvasHeight];
    /**
     * to => columnCoords, A collection of coordinates for columns
     * to => rowCoords, A collection of coordinates for rows
     */
    this.columnCoords = [];
    this.rowCoords = [];
  }
 
  /**
   * Algorithm to draw columns and rows
   * Require: 
   * => columns or width
   * => rows or height
   */
  algoColumns() {
    let canvasWidth = this.canvasWidth -this.ml -this.mr;
    if (!this.columns && this.w) {
      /**
       * calculate columns if only width is known */
      this.columns = canvasWidth / this.w;
    }else if(this.columns && !this.w) {
      /**
       * calculate width if only columns are known */
      this.w = canvasWidth / this.columns;
    }
    let i = 0, dx;
    for (; i <= this.columns; i++) {
      dx = i * (this.w + this.horizgaps) + this.ml;
      this.columnCoords.push(dx);
      if (this.horizgaps) {
        dx += this.horizgaps;
        this.columnCoords.push(dx);
      }
    }
  }
  algoRows() {
    let canvasHeight = this.canvasHeight -this.mt -this.mb;
    if (!this.rows && this.h) {
      /**
       * calculate rows if only height is known */
      this.rows = canvasHeight / this.h;
    }else if (this.rows && !this.h) {
      /**
       * calculate height if only rows are known */
      this.h = canvasHeight / this.rows;
    }

    let i = 0, dy;
    for (; i <= this.rows; i++) {
      dy = i * (this.h + this.vertgaps) + this.mt;
      this.rowCoords.push(dy);
      if (this.vertgaps) {
        dy += this.vertgaps;
        this.rowCoords.push(dy);
      }
    }
  }
  algoQuickGuides(target) {
    /**
     * app.activeDocument.guides.add(DIRECTION.HORIZONTAL | VERTICLE, x | y);
     *  Direction and coordinates
     * */
    let properties = [];
    switch (target) {
      case 'left':
        properties = [];
        break;
      case 'right':
        properties = [];
        break;
      case 'top':
        properties = [];
        break;
      case 'bottom':
        properties = [];   
        break;     
      case 'row-mid': 
        properties = [];
        break;
      case 'col-mid':
        properties = [];
        break; 
    }
    this.createGuides(...properties);    
  }
  
  get coordinatesVerticleGuides() {
    if (this.columns || this.w) {
      this.algoColumns();
      return this.columnCoords;
    }else {
      return undefined;
    }
  }
  get coordinatesHorizontalGuides() {
    if (this.rows || this.h) {
      this.algoRows()
      return this.rowCoords;
    }else {
      return undefined;
    }
  }
}