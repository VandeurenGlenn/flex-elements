import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

/**
 * @module `@vandeurenglenn/flex-elements/display.js`
 * @class FlexDisplay
 * @extends HTMLElement
 * 
 * @example html`
 <flex-display direction="column"></flex-display>
 <flex-display></flex-display>
 ...

 * @cssProperties
 * `--flex-display-direction` (row)
 * 
 * `--flex-display-max-width` (auto)
 *
 * `--flex-display-min-width` (auto)
 * 
 * `--flex-display-width` (100%)
 */
 export class FlexDisplay extends LitElement {
  @property({type: String})
  minWidth: string = 'auto'

  @property({type: String})
  maxWidth: string = 'auto'

  @property({type: String})
  width: string = '100%'

  @property({type: String})
  direction: string = 'row'

  render() {
    return html`
    <style>
      :host {
        display: flex;
        max-width: var(--flex-display-max-width, ${this.maxWidth});
        min-width: var(--flex-display-min-width, ${this.minWidth});
        width: var(--flex-display-width, ${this.width});
        flex-direction: var(--flex-display-direction, ${this.direction});
      }
    </style>
    <slot></slot>
    `
  }
}

customElements.define('flex-display', FlexDisplay)