class Square extends Rect {
  constructor(_x, _y, _height, _name, _parentID) {
    super(_x, _y, _height, _height, _name, _parentID);

    this.box.classList.add("square");
  }
}