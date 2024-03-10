import { FlexDisplay } from './internal/display.js';
declare global {
    interface HTMLElementTagNameMap {
        'flex-wrap-center': FlexWrapCenter;
    }
}
export declare class FlexWrapCenter extends FlexDisplay {
    constructor();
    static styles: import("lit").CSSResult[];
}
