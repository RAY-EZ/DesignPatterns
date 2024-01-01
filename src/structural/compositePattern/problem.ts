// export class Shape {
//   render() {
//     console.log("shape render method");
//   }
// }
// // eg.
// export class Image {}

// export class Group {
//   items: [Group, Shape]; // [..., Image]
//   add(item: Group | Shape) {
//     this.items.push(item);
//   }
//   render() {
//     console.log("group render method");
//     // problem
//     // Exaggerating but in tightly typed language
//     // adding more types will require editing render method
//     for (let item of this.items) {
//       if (item instanceof Group) {
//         item.render();
//       } else if (item instanceof Shape) {
//         item.render();
//       }
//     }
//   }
// }
