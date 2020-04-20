export default customElements.define('flex-four', class FlexFour extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
  get template() {
    return `<style>
      :host {
        flex: 4;
      }
    </style>
    
    <slot></slot>`
  }
});