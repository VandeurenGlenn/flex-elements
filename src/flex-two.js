import { FlexIt } from './it.js'

export class FlexTwo extends HTMLElement {
  constructor() {
    super();
    this.flex = 2
    console.warn('<flex-two> deprecated, use <flex-it flex="2"> instead');
  }
}

customElements.define('flex-two', FlexTwo);