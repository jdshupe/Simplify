class Items {
  constructor() {
    this.visible = [];
    this.hidden = [];
  }

  addVisible(type, name, object) {
    this.visible.push({"type": type, "name": name, "object": object});
  }
}