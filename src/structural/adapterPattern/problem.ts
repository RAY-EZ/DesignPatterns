/**
 * problem
 *
 */
// export class Image {
//   // binary data of image ... really low level details
// }

// abstract class Filter {
//   abstract apply(image: Image): void;
// }

// export class VividFilter implements Filter {
//   apply(image: Image) {
//     console.log("vivid filter");
//   }
// }

// export class VignetteFilter implements Filter {
//   apply(image: Image) {
//     console.log("vignette filter");
//   }
// }

// export class ImageView {
//   private image: Image;

//   constructor(image: Image) {
//     this.image = image;
//   }

//   apply(filter: Filter) {
//     filter.apply(this.image);
//   }
// }

// /**
//  * using some third pary libarary
//  * caramer doesn't implements our 'Filter' class
//  * differ method
//  */

// export class Caramel {
//   init() {}
//
//   // problem
//   // cannot edit library
//   render() {
//     console.log("caramel filter -- third pary");
//   }
// }
