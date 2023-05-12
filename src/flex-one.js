import { FlexIt } from './it.js'

export class FlexOne extends FlexIt {
  constructor() {
    super();
    this.flex = 1
    console.warn('<flex-one> deprecated, use <flex-it flex="1"> instead');
  }
}

customElements.define('flex-one', FlexOne)