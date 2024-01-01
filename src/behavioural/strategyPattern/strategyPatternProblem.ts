/** Problem */
/*
1. Separation of concern i.e store is doing all the work ( violating Single Responsibility Principle)
2. store method isn't scalable 

*/
// class ImageStorage {
//   compressor: string;
//   filter: string;

//   constructor(compressor: string, filter: string) {
//     this.compressor = compressor;
//     this.filter = filter;
//   }

//   public store(fileName: string) {
//     if (this.compressor === "jpeg") {
//       console.log("compressing using jpeg");
//     } else {
//       console.log("using other compression algo");
//     }

//     if (this.filter === "b&w") {
//       console.log("using b&w filter");
//     } else {
//       console.log("using other filter");
//     }
//   }
// }
