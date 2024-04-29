declare global {
    interface HTMLElementTagNameMap {
        'flex-wrap': FlexWrap;
    }
}
export declare class FlexWrap extends HTMLElement {
    constructor();
    get template(): string;
}
