class Variable extends dataHolders {
  constructor(_name, _value, _parentID) {
    super(
      _name,
      _value,
      _parentID
    );

    this.box.id = _name;
    this.box.innerHTML = _name.toUpperCase();
    this.style();
    this.box.classList.add("variable")

    document.body.appendChild(this.box);
    this.makeDraggable();
    items.addVisible("Variable", _name, this);
  }

  style() {
    this.box.style.width = this.box.innerHTML.length + 2 + "ch";
    this.box.style.textAlign = "center";
    this.box.style.height = "auto";
    this.box.style.backgroundColor = "rgb(220, 220, 220)";
    this.box.style.padding = "5px";
    this.box.style.borderRadius = "10px";
    this.box.style.position = "relative";
    this.box.style.zIndex = 10;
    this.box.style.boxShadow = "2px 2px 5px black";
  }
}