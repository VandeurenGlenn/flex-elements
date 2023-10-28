import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

/**
 * @module @vandeurenglenn/flex-elements/display.js
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
 * 
 * `--flex-display-padding` (0)
 * 
 * `--flex-display-align-items` (flex-start)
 * 
 * `--flex-display-justify-content` (flex-start)
 * 
 * `--flex-display-box-sizing` (border-box)
 */
 export class FlexDisplay extends LitElement {
  @property({ type: String })
  padding: string = '0'

  @property({type: String})
  minWidth: string = 'auto'

  @property({type: String})
  maxWidth: string = 'auto'

  @property({type: String})
  width: string = '100%'

  @property({type: String, reflect: true})
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row'

  @property({type: Boolean, reflect: true})
  center: boolean

  @property({type: Boolean, reflect: true, attribute: 'center-center'})
  centerCenter: boolean

  @property({type: String})
  justifyContent: string = 'flex-start'

  @property({type: String})
  alignItems: string = 'flex-start'

  @property({type: String})
  boxSizing: 'border-box' | 'content-box' = 'border-box'
  
  render() {
    return html`
    <style>
      :host {
        display: flex;
        box-sizing: var(--flex-display-box-sizing, ${this.boxSizing});
        max-width: var(--flex-display-max-width, ${this.maxWidth});
        min-width: var(--flex-display-min-width, ${this.minWidth});
        width: var(--flex-display-width, ${this.width});
        flex-direction: var(--flex-display-direction, ${this.direction});
        justify-content: var(--flex-display-justify-content, ${this.justifyContent});
        align-items: var(--flex-display-align-items, ${this.alignItems});
        padding: var(--flex-display-padding, ${this.padding});
      }

      :host([center]) {
        align-items: center;
      }

      :host([center-center]) {
        align-items: center;
        justify-content: center
      }
    </style>
    <slot></slot>
    `
  }
}
