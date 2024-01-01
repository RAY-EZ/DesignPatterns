//
// SOLID principles
// like isolating the reponsiblity
class Subject {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }
  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(obs: Observer) {
    let index = 0;
    for (let observer of this.observers) {
      if (obs === observer) {
        this.observers.splice(index, 1);
        break;
      }
      index++;
    }
  }

  notify(value: number) {
    for (let observer of this.observers) {
      observer.update(value);
    }
  }
}
export class DataSource extends Subject {
  value: number | undefined;

  constructor() {
    super();
    this.value = undefined;
  }
  setValue(value: number) {
    // it should also notify after changing data
    this.value = value;
    this.notify(value);
  }

  getValue() {
    return this.value;
  }
}

interface Observer {
  update(value: number): void;
}

export class SpreadSheet implements Observer {
  // add reference to Datasrouce ( bad type of linking) to getValue
  // directly
  update(value: number) {
    console.log("updated spreadsheet: ", value);
  }
}

export class Chart implements Observer {
  update(value: number) {
    console.log("updated chart: ", value);
  }
}
