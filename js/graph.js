const gridSize = 30;

class Graph {
  constructor(_xDim = 10, _yDim = 10, _xPos = 0, _yPos = 0, _name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) {
    this.box = document.createElement("div");
    this.canv = document.createElement("canvas");
    this.ctx = this.canv.getContext("2d");
    this.xDim = _xDim * gridSize * 2;
    this.yDim = _yDim * gridSize * 2;
    this.data = {
      points: [],
      equations: [],
      lines: []
    }

    this.canv.style.left = _xPos + "px";
    this.canv.style.top = _yPos + "px";

    this.box.id = _name + "-box";
    this.box.classList.add("graph-container");

    this.canv.id = _name;
    this.canv.width = this.xDim;
    this.canv.height = this.yDim;
    this.canv.classList.add("graph")

    document.body.appendChild(this.box);
    this.box.appendChild(this.canv);
    $("#" + this.box.id).draggable();

    this.drawGrid();
    items.addVisible("Graph", _name, this);
    this.intitalize();
  }


  // get and set methods
  get dimensions() {
    let temp = {x: this.xDim, y: this.yDim}
    return temp
  }

  get x() {
    return this.xDim;
  }
  set x(x) {
    this.xDim = x;
  }

  get y() {
    return this.yDim;
  }
  set y(y) {
    this.yDim = y;
  }


  // object methods
  intitalize() {
    this.menuButton = document.createElement("div");
    this.menuButton.innerHTML = "menu";
    this.menuButton.classList.add("menu-toggle-button");
    this.box.appendChild(this.menuButton);

    this.menu = document.createElement("div");
    this.menu.classList.add("menu-container");
    this.showDataButton = document.createElement('div');
    this.showDataButton.innerHTML = "DATA";
    this.showDataButton.classList.add("show-data");
    this.showDataButton.classList.add("menu-button");

    this.box.appendChild(this.menu);
    this.menu.appendChild(this.showDataButton);
  }

  addPointToGraph(point) {
    let newPoint = this.convertCoordToPixels(point);
    this.data.points.push({coord: point, pixel: newPoint});
    this.showData();
  }
  
  addRectToGraph(rect) {
    let v1 = this.convertCoordToPixels(rect.value.v1);
    let v2 = this.convertCoordToPixels(rect.value.v2);
    let v3 = this.convertCoordToPixels(rect.value.v3);
    let v4 = this.convertCoordToPixels(rect.value.v4);
    this.data.lines.push({point1: v1, point2: v2});
    this.data.lines.push({point1: v2, point2: v3});
    this.data.lines.push({point1: v3, point2: v4});
    this.data.lines.push({point1: v4, point2: v1});
    this.showData();
  }

  showData() {
    this.data.points.forEach(element => {
      this.ctx.beginPath();
      this.ctx.arc(element.pixel.x, element.pixel.y, 5, 0, 2 * Math.PI);
      this.ctx.fill();
    })
    this.data.lines.forEach(line => {
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "#000000";
      this.ctx.beginPath();
      this.ctx.moveTo(line.point1.x, line.point1.y);
      this.ctx.lineTo(line.point2.x, line.point2.y);
      this.ctx.stroke();
    })
  }

  convertCoordToPixels(point) {
    let xPixLoc = point.x * gridSize + this.xDim/2;
    let yPixLoc = point.y * -gridSize + this.yDim/2;
    let PixLoc = {x: xPixLoc, y: yPixLoc};
    return PixLoc;
  }

  background(color) {
    this.canv.style.backgroundColor = color;
  }

  drawGrid() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.xDim / 2, 0);
    this.ctx.lineTo(this.xDim / 2, this.yDim);
    this.ctx.moveTo(0, this.yDim/2);
    this.ctx.lineTo(this.xDim, this.yDim/2);
    this.ctx.stroke();

    this.ctx.strokeRect(0, 0, this.xDim, this.yDim);

    this.ctx.strokeStyle = "#999999";
    this.ctx.beginPath();
    for (let x = 1; x < this.xDim / gridSize; x++) {
      this.ctx.moveTo(x * gridSize, 0);
      this.ctx.lineTo(x * gridSize, this.yDim);
      this.ctx.moveTo(0, x * gridSize);
      this.ctx.lineTo(this.xDim, x * gridSize);
    }
    this.ctx.stroke();
  }
}