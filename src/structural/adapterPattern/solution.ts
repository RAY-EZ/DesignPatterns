import { Caramel } from "./thirdParty";

abstract class Filter {
  abstract apply(image: Image): void;
}

export class Image {
  // binary data of image ... really low level details
}

export class CaramelFilter implements Filter {
  filter: Caramel;
  constructor(filter: Caramel) {
    this.filter = filter;
  }
  apply(image: Image) {
    this.filter.init(); // extra step
    this.filter.render(image);
  }
}
export class VividFilter implements Filter {
  apply(image: Image) {
    console.log("vivid filter");
  }
}

export class VignetteFilter implements Filter {
  apply(image: Image) {
    console.log("vignette filter");
  }
}

export class ImageView {
  private image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  apply(filter: Filter) {
    filter.apply(this.image);
  }
}
