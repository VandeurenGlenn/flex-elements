import { CSSResultGroup, css, html } from 'lit';
import { FlexDisplay } from './internal/display.js';

declare global {
  interface HTMLElementTagNameMap {
    'flex-wrap-center': FlexWrapCenter;
  }
}

export class FlexWrapCenter extends FlexDisplay {
  constructor() {
    super();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-flow: row wrap;
        --flex-display-justify-content: center;
      }
    `,
  ];
}
customElements.define('flex-wrap-center', FlexWrapCenter);
