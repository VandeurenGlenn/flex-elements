declare global {
  interface HTMLElementTagNameMap {
    'flex-it': FlexIt;
  }
}

/**
 * @module `@vandeurenglenn/flex-elements/it.js`
 * @class FlexIt
 * @extends HTMLElement
 * 
 * @example html`
 <flex-it flex="1"></flex-it>
 <flex-it flex="3"></flex-it>
 ...

 * @cssProperties
 * `--flex-it-max-width` (auto)
 *
 * `--flex-it-min-width` (auto)
 * 
 * `--flex-it-width` (100%)
 */
export class FlexIt extends HTMLElement {
  static get observedAttributes() { return ['flex', 'min-width', 'max-width', 'width']; }

  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.maxWidth = this.getAttribute('max-width') || 'auto'
    this.minWidth = this.getAttribute('min-width') || 'auto'
    this.width = this.getAttribute('width') || '100%'
    this.flex = this.getAttribute('flex') || '1'

    this.shadowRoot.innerHTML = this.template
  }

  attributeChangedCallback(name, oldValue, newValue) {
    oldValue !== newValue &&
      this.style.setProperty(`--flex-it-${name}`, newValue)
  }

  set minWidth(value) {
    value !== this.minWidth && this.setAttribute('min-width', value)
  }

  set maxWidth(value) {
    value !== this.maxWidth && this.setAttribute('max-width', value)
  }

  set width(value) {
    value !== this.width && this.setAttribute('width', value)
  }

  set flex(value) {
    value !== this.flex && this.setAttribute('flex', value)
  }

  get minWidth() {
    return this.getAttribute('min-width')
  }

  get maxWidth() {
    return this.getAttribute('max-width')
  }

  get width() {
    return this.getAttribute('width')
  }

  get flex() {
    return this.getAttribute('flex')
  }

  get template() {
    return `<style>
      :host {
        --flex-it-pointer-events: none;
        --flex-it-user-select: none;

        flex: var(--flex-it-flex, ${this.flex});
        max-width: var(--flex-it-max-width, ${this.maxWidth});
        min-width: var(--flex-it-min-width, ${this.minWidth});
        width: var(--flex-it-width, ${this.width});
        pointer-events: var(--flex-it-pointer-events);
        user-select: var(--flex-it-user-select);
      }
    </style>
    <slot></slot>
    `
  }
}

customElements.define('flex-it', FlexIt)