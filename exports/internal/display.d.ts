import { LiteElement } from '@vandeurenglenn/lite';
/**
 * @module @vandeurenglenn/flex-elements/display.js
 * @class FlexDisplay
 * @extends HTMLElement
 *
 * @example html`
 <flex-display direction="column"></flex-display>
 <flex-display></flex-display>
 ...

 * @cssProperties
 * `--flex-display-direction` (row)
 *
 * `--flex-display-max-width` (auto)
 *
 * `--flex-display-min-width` (auto)
 *
 * `--flex-display-width` (100%)
 *
 * `--flex-display-padding` (0)
 *
 * `--flex-display-align-items` (flex-start)
 *
 * `--flex-display-justify-content` (flex-start)
 *
 * `--flex-display-box-sizing` (border-box)
 */
export declare class FlexDisplay extends LiteElement {
    accessor padding: string;
    accessor minWidth: string;
    accessor maxWidth: string;
    accessor width: string;
    accessor direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    accessor center: boolean;
    accessor centerCenter: boolean;
    accessor justifyContent: string;
    accessor alignItems: string;
    accessor boxSizing: 'border-box' | 'content-box';
    render(): import("lit-html").TemplateResult<1>;
}
