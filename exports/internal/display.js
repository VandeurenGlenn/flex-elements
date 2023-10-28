var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        super(...arguments);
        this.padding = '0';
        this.minWidth = 'auto';
        this.maxWidth = 'auto';
        this.width = '100%';
        this.direction = 'row';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.boxSizing = 'border-box';
    }
    render() {
        return html `
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
    `;
    }
}
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "padding", void 0);
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "minWidth", void 0);
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "maxWidth", void 0);
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true })
], FlexDisplay.prototype, "direction", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], FlexDisplay.prototype, "center", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'center-center' })
], FlexDisplay.prototype, "centerCenter", void 0);
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "justifyContent", void 0);
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "alignItems", void 0);
__decorate([
    property({ type: String })
], FlexDisplay.prototype, "boxSizing", void 0);
