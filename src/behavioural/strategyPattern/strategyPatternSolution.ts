// we can use Absctraction and encapsulation
// group the functionality of compression and filter in their own
// set of classes

abstract class Compression {
  constructor(public algorithm: string) {}
  abstract compress(): void;
}

abstract class Filter {
  constructor(public filterType: string) {}
  abstract filter(): void;
}

// using the open close principle
// i.e can add as many compression like png, red filter etc..
// without really changing the base class
export class JPEGCompression extends Compression {
  constructor() {
    super("JPEG");
  }
  compress() {
    // console.log('implementation of jpeg compression');
    console.log("compressing using jpeg compression");
  }
}

export class BWFilter extends Filter {
  constructor() {
    super("B&W");
  }

  filter() {
    console.log("applying b&w filter");
  }
}

export class ImageStorage {
  compressor: Compression;
  filter: Filter;

  constructor(compressor: Compression, filter: Filter) {
    this.compressor = compressor;
    this.filter = filter;
  }

  public store(fileName: string) {
    this.compressor.compress();
    this.filter.filter();
  }
}
