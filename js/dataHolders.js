class dataHolders {
  constructor(_name = "", _value, _parentID = "document") {
    this.name = (_name == "")?Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15):_name;
    this.value = _value;
    this.parent = _parentID;

    this.box = document.createElement("div");
    this.box.classList.add("data-holder");
    this.box.id = this.name;

    this.display();
    this.makeDraggable();
  }

  makeDraggable() {
    this.box.classList.add("draggable");
    $(".draggable").draggable({
      containment: 'parent'
    });
  }

  display() {
    if (this.parent != "document") {
      let temp = document.getElementById(this.parent);
      temp.appendChild(this.box);
    } else { document.body.appendChild(this.box)}
  }
}