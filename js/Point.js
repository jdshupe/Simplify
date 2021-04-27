class Point extends dataHolders {
  constructor (_xValue, _yValue, _name, _parentID) {
    super(
      _name,
      {
        x: _xValue,
        y: _yValue
      },
      _parentID
    );
    
    this.style();   
  }
  
  // get and set methods
  get location() { return this.box.innerHTML };
  get x()        { return this.value.x };
  get y()        { return this.value.y };
  
  set x(x)       { this.value.x = x };
  set y(y)       { this.value.y = y };
  
  // object methods
  style() {
    this.box.innerHTML = (this.name.length > 15) ? `Point: (${this.value.x}, ${this.value.y})` : `${this.name}: (${this.value.x}, ${this.value.y})`;
    
    this.box.style.width = this.box.innerHTML.length - 1 + "ch";
    this.box.style.textAlign = "center";
    this.box.style.height = "auto";
    this.box.style.backgroundColor = "rgb(220, 220, 220)";
    this.box.style.padding = "5px";
    this.box.style.borderRadius = "10px";
    this.box.style.position = "relative";
    this.box.style.zIndex = 10;
    this.box.style.boxShadow = "2px 2px 3px black";
    this.box.style.margin = "1px";

    items.addVisible("Point", this.name, this);
  }

  mult(factor) {
    this.value.x *= factor;
    this.value.y *= factor;
    return this.location;
  }

  div(divisor) {
    this.value.x /= divisor;
    this.value.y /=divisor;
    return this.location;
  }

  add(xMove, yMove) {
    this.value.x += xMove;
    this.value.y += yMove;
    return this.location;
  }

  addX(xMove) {
    this.value.x += xMove;
    return this.location;
  }

  addY(yMove) {
    this.value.y += yMove;
    return this.location;
  }
  
  copy(name = this.name) {
    return new point(this.x, this.y, name);
  }


  // class methods
  static add(p1, p2) {
    p1.add(p2.x, p2.y);
    p1.box.innerHTML = `${p1.name}: (${p1.xcoord}, ${p1.ycoord})`
    return p1.location;
  }
}