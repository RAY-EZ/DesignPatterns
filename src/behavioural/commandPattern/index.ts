import {
  BlackAndWhiteCommand,
  CompositeCommand,
  CropCommand,
  Button
} from "./solution";

const composite = new CompositeCommand();
composite.add(new BlackAndWhiteCommand());
composite.add(new CropCommand());
const button = new Button(composite);
button.click();
