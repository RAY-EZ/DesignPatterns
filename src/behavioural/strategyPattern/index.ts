import {
  ImageStorage,
  JPEGCompression,
  BWFilter
} from "./strategyPatternSolution";

const imageStore = new ImageStorage(new JPEGCompression(), new BWFilter());
imageStore.store("cute dog");
