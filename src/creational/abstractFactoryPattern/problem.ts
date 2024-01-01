// //problem
// // 'contactform' is violating open-close principle
// //  2. we have to be careful while creating object i.e not
// // to mix up Ant button with Material button

// //
// enum Theme {
//   ANT,
//   MATERIAL
// }

// interface Widget {
//   render(): void;
// }

// interface Button extends Widget {}
// interface TextBox extends Widget {}

// // themes

// /// Ant
// class AntButton implements Button {
//   render() {
//     console.log("ant button");
//   }
// }

// class AntTextBox implements TextBox {
//   render() {
//     console.log("ant textbox");
//   }
// }

// /// Material
// class MaterialButton implements Button {
//   render() {
//     console.log("ant button");
//   }
// }

// class MaterialTextBox implements TextBox {
//   render() {
//     console.log("ant textbox");
//   }
// }

// /**
//  * example use case
//  */

// // APP

// class ContactForm {
//   render(theme: Theme) {
//     if (theme === Theme.ANT) {
//       new AntButton().render();
//       new AntTextBox().render();
//     }
//     if (theme === Theme.MATERIAL) {
//       new MaterialButton().render();
//       new MaterialTextBox().render();
//     }
//   }
// }
