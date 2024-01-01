//solution
// creating a pipleline of actions after all actions
// finally write to cloud

// // to encrypt and then write to cloud
// export abstract class Operation {
//   next: Operation;
//   write(data: string) {
//     if (this.next) {
//       const modifiedData = this.action(data);
//       this.next.write(modifiedData);
//     } else {
//       this.action(data);
//     }
//   }
//   abstract action(data: string): string;
// }

// export class CloudStream extends Operation {
//   // our complex logic that interacts with cloud
//   action(data: string) {
//     console.log("writing data to cloud --> ", data);
//     return data;
//   }
// }
// export class EncryptStream extends Operation {
//   action(data: string) {
//     console.log("encrypting...");
//     const buf = new Buffer(data);
//     return buf.toString("base64");
//   }
// }

// // to compress and then write to cloud

// export class Compress extends Operation {
//   // write(data: string) {
//   //   const compressed = this.compress(data);
//   //   super.write(compressed);
//   // }

//   action(data: string) {
//     console.log("compressing ...", data.length);
//     return data;
//   }
// }

// //// we can go on
// export class CompressAndEncrypt extends CloudStream {}

/**
 * correct apporach
 * decorate[cloudStream]--> EncryptDecorate[decorate[cloudStream]]
 * using composition relationship, Encrpt, Comp uses stream reference.
 * like in composition rel. the child associated with upper class
 */

abstract class Stream {
  abstract write(data: string): void;
}

export class CloudStream implements Stream {
  write(data: string) {
    console.log("streaming data--> ", data);
  }
}

export class EncryptStream implements Stream {
  stream: Stream;
  constructor(stream: Stream) {
    this.stream = stream;
  }

  write(data: string) {
    const buf = new Buffer(data);
    console.log("encrypting data--> ", buf.toString("base64"));
    this.stream.write(buf.toString("base64"));
  }
}

export class CompressStream implements Stream {
  stream: Stream;
  constructor(stream: Stream) {
    this.stream = stream;
  }

  write(data: string) {
    console.log("compressing data..");
    this.stream.write(data);
  }
}
