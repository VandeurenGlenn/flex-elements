export class FlexWrap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.template;
    }
    get template() {
        return `<style>
      :host {
        display: flex;
        flex-flow: row wrap;
      }      
    </style>
    <slot></slot>
    `;
    }
}
customElements.define('flex-wrap', FlexWrap);
