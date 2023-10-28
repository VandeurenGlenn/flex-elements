declare global {
    interface HTMLElementTagNameMap {
        'flex-wrap-evenly': FlexWrapEvenly;
    }
}
export declare class FlexWrapEvenly extends HTMLElement {
    constructor();
    get template(): string;
}
