/**
 * problems
 * Creating Point object can be expesnive for large apps like google maps
 * icon is not that tigtly related to Point it can be referenced
 */
// enum PointType {
//   CAFE,
//   RESTAURANTS,
//   HOSTIPTAL,
//   PETROL
// }

// export class Point {
//   x: number;
//   y: number;
//   type: PointType; // like in google maps location has icon
//   icon: Buffer; // 20kb ... if Point 1000 objects created total size would be 20MB

//   constructor(x: number, y: number, type: PointType, icon: Buffer) {
//     this.x = x;
//     this.y = y;
//     this.type = type;
//     this.icon = icon;
//   }
//   draw() {
//     console.log("drawing %s at (%d, %d)", this.type, this.x, this.y);
//   }
// }

// export class PointService {
//   getPoints(): Point[] {
//     const points: Point[] = [];
//     // points.push(new Point())
//     return points;
//   }
// }

// example use
// const points = [];
// points.push(new Point(0, 0, PointType.CAFE, new Buffer(20 * 1024))); // 20kb of icon
// points.push(new Point(15, 5, PointType.CAFE, new Buffer(20 * 1024))); // 20kb of icon
// points.push(new Point(105, 200, PointType.CAFE, new Buffer(20 * 1024))); // 20kb of icon

// points.push(new Point(10, 20, PointType.RESTAURANTS, new Buffer(32 * 1024))); // 32kb of icon
