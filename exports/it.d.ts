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
export declare class FlexIt extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    set minWidth(value: string);
    set maxWidth(value: string);
    set width(value: string);
    set flex(value: string);
    get minWidth(): string;
    get maxWidth(): string;
    get width(): string;
    get flex(): string;
    get template(): string;
}
