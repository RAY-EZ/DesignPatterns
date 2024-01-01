import { Group, Shape } from "./solution";
//@ts-ignore
title.innerHTML = "Composite Pattern";

const group1 = new Group();
group1.add(new Shape("square"));
group1.add(new Shape("circle"));
const group2 = new Group();
group2.add(new Shape("rectangle"));
group2.add(new Shape("star"));
group1.add(group2);

group1.render();
