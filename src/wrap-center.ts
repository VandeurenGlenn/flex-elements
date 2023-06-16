import { CSSResultGroup, css, html } from "lit";
import { FlexDisplay } from "./display.js";

export class FlexWrapCenter extends FlexDisplay {
  constructor() {
    super();
  }

  static styles?: CSSResultGroup = [
    css`
    :host {
      display: flex;
      flex-flow: row wrap;
      --flex-display-justify-content: center;
    }
    `
  ]
}
customElements.define('flex-wrap-center', FlexWrapCenter);