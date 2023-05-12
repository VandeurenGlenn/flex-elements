import { FlexDisplay } from "./display.js";

export class FlexRow extends FlexDisplay {
  constructor() {
    super();
    this.direction = 'row'
    this.width = 'auto'
  }
}

customElements.define('flex-row', FlexRow);