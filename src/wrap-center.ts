import { html } from "lit";
import { FlexDisplay } from "./display.js";

export class FlexWrapCenter extends FlexDisplay {
  constructor() {
    super();
  }
  render() {
    return html`<style>
      :host {
        display: flex;
        flex-flow: row wrap;
        --flex-display-justify-content: center;
      }      
    </style>
    <slot></slot>
    `
  }
}
customElements.define('flex-wrap-center', FlexWrapCenter);