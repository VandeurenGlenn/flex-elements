import { FlexIt } from './it.js'

export default customElements.define('flex-four', class FlexFour extends FlexIt {
  constructor() {
    super();
    this.flex = 4
    console.warn('<flex-four> deprecated, use <flex-it flex="4"> instead');
  }
});