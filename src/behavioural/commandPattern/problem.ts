/**
 * problem
 * button is expandible if clicked it serves multiple
 * purpose like onclick ( saving to db, showing pop)
 * can be checkbox
 * textbox
 */
export class Button {
  label: string;

  constructor(label: string) {
    this.label = label;
  }
  click() {
    // problem
  }

  getLabel() {}
  setLabel(label: string) {
    this.label = label;
  }
}

const submitbutton = new Button("submit");
// should not do this
// like in js click must be called not we should call it
submitbutton.click = () => {
  console.log("submit button");
};
const closeButton = new Button("close");
