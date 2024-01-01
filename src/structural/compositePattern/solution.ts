abstract class Component {
  abstract render(): void;
}
export class Shape implements Component {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  render() {
    console.log("shape render: ", this.name);
  }
}
// eg.
export class Image implements Component {
  render() {
    console.log("image render");
  }
}

export class Group implements Component {
  items: Component[]; // [..., Image]

  constructor() {
    this.items = [];
  }
  add(item: Component) {
    this.items.push(item);
  }
  render() {
    console.log("group render");
    for (let item of this.items) {
      item.render();
    }
  }
}
