declare global {
  interface HTMLElementTagNameMap {
    'flex-wrap-around': FlexWrapAround;
  }
}

export class FlexWrapAround extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
  get template() {
    return `<style>
      :host {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
      }      
    </style>
    <slot></slot>
    `
  }
}
customElements.define('flex-wrap-around', FlexWrapAround);