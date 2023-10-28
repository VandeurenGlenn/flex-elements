import { css } from "lit";
import { FlexDisplay } from "./internal/display.js";
export class FlexWrapCenter extends FlexDisplay {
    constructor() {
        super();
    }
    static { this.styles = [
        css `
    :host {
      display: flex;
      flex-flow: row wrap;
      --flex-display-justify-content: center;
    }
    `
    ]; }
}
customElements.define('flex-wrap-center', FlexWrapCenter);
