import { FlexDisplay } from "./internal/display.js";
declare global {
    interface HTMLElementTagNameMap {
        'flex-column': FlexColumn;
    }
}
/**
 * @module `@vandeurenglenn/flex-elements/column.js`
 * @class FlexColumn
 * @extends FlexDisplay
 *
 * @example html`
 <flex-column></flex-column>
 ...

 * @cssProperties
 * `--flex-display-direction` (row)
 *
 * `--flex-display-max-width` (auto)
 *
 * `--flex-display-min-width` (auto)
 *
 * `--flex-display-width` (100%)
 */
export declare class FlexColumn extends FlexDisplay {
    constructor();
}
