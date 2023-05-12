export class FlexThree extends HTMLElement {
  constructor() {
    super();
    this.flex = 3
    console.warn('<flex-three> deprecated, use <flex-it flex="3"> instead');
  }
}
customElements.define('flex-three', FlexThree);