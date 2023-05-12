import { html } from "lit";
import { property } from "lit/decorators.js";
import { FlexDisplay } from "./display.js";

/**
 * @module `@vandeurenglenn/flex-elements/container.js`
 * @class FlexContainer
 * @extends HTMLElement
 * 
 * @example html`
 <flex-container min-width="320px">content</flex-container>
 <flex-container max-width="640px"row>content</flex-container>`

 * @cssProperties
 * `--flex-display-max-width` (64Opx)
 *
 * `--flex-display-min-width` (320px)
 * 
 * `--flex-display-width` (100%)
 * 
 * `--flex-display-direction` (column)
 * `--flex-display-padding` (12px)
 */
export class FlexContainer extends FlexDisplay {
  @property({ type: String })
  padding: string = '12px'

  constructor() {
    super();
    this.maxWidth = '640px'
    this.minWidth = '320px'
    this.width = '100%'
    this.direction = 'column'
  }

  render() {
    return html`
    <style>
      :host {
        display: flex;
        max-width: var(--flex-display-max-width, ${this.maxWidth});
        min-width: var(--flex-display-min-width, ${this.minWidth});
        width: var(--flex-display-width, ${this.width});
        padding: var(--flex-display-padding, ${this.padding});
        flex-direction: var(--flex-display-direction, ${this.direction});
      }
    </style>
    <slot></slot>
    `
  }
}

customElements.define('flex-container', FlexContainer)