import { PointService } from "./solution";
//@ts-ignore
title.innerHTML = "Fly Weight Pattern";

const service = new PointService();

const points = service.getPoints();
for (let point of points) {
  point.draw();
}
