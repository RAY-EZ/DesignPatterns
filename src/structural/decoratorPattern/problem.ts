/// Problem
// every time new changes to wrap around basic stream
// requires implementation of its own
// what if 'cloudstream' is changed all extended classes needs update

export class CloudStream {
  // our complex logic that interacts with cloud
  write(data: string) {
    console.log("writing data to cloud --> ", data);
  }
}

// to encrypt and then write to cloud

export class EncryptStream extends CloudStream {
  write(data: string) {
    const encrypted = this.encrypt(data);
    super.write(encrypted);
  }

  encrypt(data: string) {
    const buf = new Buffer(data);
    return buf.toString("base64");
  }
}

// to compress and then write to cloud

export class Compress extends CloudStream {
  write(data: string) {
    const compressed = this.compress(data);
    super.write(compressed);
  }

  compress(data: string) {
    console.log("compressing ...", data.length);
    return data;
  }
}

//// we can go on
export class CompressAndEncrypt extends CloudStream {}
