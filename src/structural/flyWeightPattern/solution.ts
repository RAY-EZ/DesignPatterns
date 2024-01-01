// solution
// shifting the class weight to common reusable classes
// like recreating Point

// flywieght serpates data from an object
// it helps to reuse the same data accessible via Factory & services
enum PointType {
  CAFE,
  RESTAURANTS,
  HOSTIPTAL,
  PETROL
}

export class Point {
  x: number;
  y: number;
  icon: PointIcon;

  constructor(x: number, y: number, icon: PointIcon) {
    this.x = x;
    this.y = y;
    this.icon = icon;
  }
  draw() {
    console.log("drawing %s at (%d, %d)", this.icon, this.x, this.y);
  }
}

export class PointIcon {
  type: PointType; // like in google maps location has icon
  icon: Buffer; // 20kb ... if Point 1000 objects created total size would be 20MB

  constructor(type: PointType, icon: Buffer) {
    this.type = type;
    this.icon = icon;
  }
}

export class PointIconFactory {
  private iconMap: Map<PointType, PointIcon>;
  constructor() {
    this.iconMap = new Map();
  }
  getPointIcon(type: PointType): PointIcon {
    if (this.iconMap.has(type)) {
      return this.iconMap.get(type);
    } else {
      const icon = new PointIcon(type, new Buffer(10 * 1024));
      this.iconMap.set(type, icon);
      return icon;
    }
  }
}

export class PointService {
  private pointIconFactory: PointIconFactory;

  constructor() {
    this.pointIconFactory = new PointIconFactory();
  }
  getPoints(): Point[] {
    const points: Point[] = [];
    // for example ... otherwise it should not create Point
    points.push(
      new Point(1, 2, this.pointIconFactory.getPointIcon(PointType.CAFE))
    );
    return points;
  }
}
