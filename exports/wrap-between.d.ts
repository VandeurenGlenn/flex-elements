declare global {
    interface HTMLElementTagNameMap {
        'flex-wrap-between': FlexWrapBetween;
    }
}
export declare class FlexWrapBetween extends HTMLElement {
    constructor();
    get template(): string;
}
