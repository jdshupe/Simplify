class Rect extends dataHolders {
  constructor(_x, _y, _width, _height, _name, _parentID) {
    super(
      _name,
      {
        v1: {x: _x, y: _y},
        v2: {x: _x + _width, y: _y},
        v3: {x: _x + _width, y: _y + _height},
        v4: {x: _x, y: _y + _height}
      }, 
      _parentID
    );
    this.box.classList.add("rectangle");

    this.addHeader();
    this.addPoints();
    this.style();
  }

  style() {
    items.addVisible("Rectangle", this.name, this);
    
    this.box.style.width = "min-content";
    this.box.style.textAlign = "center";
    this.box.style.height = "auto";
    this.box.style.backgroundColor = "rgb(220, 220, 220)";
    this.box.style.padding = "5px";
    this.box.style.borderRadius = "10px";
    this.box.style.position = "relative";
    this.box.style.zIndex = 9;
    this.box.style.boxShadow = "2px 2px 5px black";
    this.box.style.paddingLeft = "20px"

    this.header.style.position = "relative";
    this.header.style.left = "-17px";
    this.header.style.fontSize = "22px";
    this.header.style.textAlign = "left";
  }
  addPoints() {
    this.value.v1 = new Point(this.value.v1.x, this.value.v1.y, "v1", this.box.id);
    this.value.v2 = new Point(this.value.v2.x, this.value.v2.y, "v2", this.box.id);
    this.value.v3 = new Point(this.value.v3.x, this.value.v3.y, "v3", this.box.id);
    this.value.v4 = new Point(this.value.v4.x, this.value.v4.y, "v4", this.box.id);
  }
  addHeader() {
    this.header = document.createElement("div");
    this.header.innerHTML = this.name;
    this.box.append(this.header);
  }
}