declare global {
    interface HTMLElementTagNameMap {
        'flex-wrap-around': FlexWrapAround;
    }
}
export declare class FlexWrapAround extends HTMLElement {
    constructor();
    get template(): string;
}
