import { SpreadSheet, Chart, DataSource } from "./solution";

const ds = new DataSource();
const ss = new SpreadSheet();
const ch = new Chart();

ds.addObserver(ss);
ds.addObserver(ch);

ds.setValue(1);
ds.setValue(100);
ds.removeObserver(ch);
ds.setValue(299);
// ds.pull();
