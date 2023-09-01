import { FlexDisplay } from "./internal/display.js";

declare global {
  interface HTMLElementTagNameMap {
    'flex-row': FlexRow;
  }
}

export class FlexRow extends FlexDisplay {
  constructor() {
    super();
    this.direction = 'row'
    this.width = 'auto'
  }
}

customElements.define('flex-row', FlexRow);