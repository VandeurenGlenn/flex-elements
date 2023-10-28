import { FlexDisplay } from "./internal/display.js";
declare global {
    interface HTMLElementTagNameMap {
        'flex-row': FlexRow;
    }
}
export declare class FlexRow extends FlexDisplay {
    constructor();
}
