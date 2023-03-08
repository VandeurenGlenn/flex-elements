export default customElements.define('flex-container', class FlexContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.maxWidth = this.getAttribute('max-width') || 640
    this.minWidth = this.getAttribute('min-width') || 320
    this.shadowRoot.innerHTML = this.template
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-direction: column;
        max-width: ${this.maxWidth}px;
        min-width: ${this.minWidth}px;
        width: 100%;
      }
      :host([row]) {
        flex-direction: row;
      }
    </style>
    <slot></slot>
    `
  }
});