import { FlexDisplay } from "./internal/display.js";
declare global {
  interface HTMLElementTagNameMap {
    'flex-display': FlexDisplayEl;
  }
}
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
 *<
 * `--flex-display-min-width` (auto)
 * 
 * `--flex-display-width` (100%)
 * 
 * `--flex-display-padding` (0)
 * 
 * `--flex-display-align-items` (flex-start)
 * 
 * `--flex-display-justify-content` (flex-start)
 * 
 * `--flex-display-box-sizing` (border-box)
 */
export class FlexDisplayEl extends FlexDisplay {}

customElements.define('flex-display', FlexDisplayEl)