import { CaramelFilter, VividFilter, ImageView, Image } from "./solution";
import { Caramel } from "./thirdParty";
// @ts-ignore
title.innerHTML = "Adapter Pattern";

const imageView = new ImageView(new Image());
imageView.apply(new VividFilter());
imageView.apply(new CaramelFilter(new Caramel()));
