/**
 * Problem
 * adding methods to HTMLElement will require to
 * modfiy all the implemented classes
 * -- violatimg the open-close principle
 */
//

// export abstract class HTMLElement {
//   abstract highlight():void;
//   // eg
//   // abstract toText():string;
// }

// export class HTMLDocument {
//   elements : HTMLElement[];

//   public add(element: HTMLElement){
//     this.elements.push(element);
//   }

//   public highlight(){
//     for(let elem of this.elements){
//       elem.highlight();
//     }
//   }
// }

// export class Button implements HTMLElement {
//   highlight(){
//     console.log('highlighting the button');
//   }

//   // adding toText() here.... --> 1
// }

// export class Header implements HTMLElement {
//   highlight(){
//     console.log('highlighting the header');
//   }

//   // adding toText() here..... --> 2
// }
