import { FlexDisplay } from "./internal/display.js";
declare global {
    interface HTMLElementTagNameMap {
        'flex-container': FlexContainer;
    }
}
/**
 * @module `@vandeurenglenn/flex-elements/container.js`
 * @class FlexContainer
 * @extends HTMLElement
 *
 * @example html`
 <flex-container min-width="320px">content</flex-container>
 <flex-container max-width="640px"row>content</flex-container>`

 * @cssProperties
 * `--flex-display-max-width` (64Opx)
 *
 * `--flex-display-min-width` (320px)
 *
 * `--flex-display-width` (100%)
 *
 * `--flex-display-direction` (column)
 * `--flex-display-padding` (12px)
 */
export declare class FlexContainer extends FlexDisplay {
    constructor();
}
