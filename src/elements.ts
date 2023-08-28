import { FlexContainer } from './container.js'
import { FlexColumn } from './column.js'
import { FlexRow } from './row.js'
import { FlexIt } from './it.js'
import { FlexDisplay } from './display.js'

import { FlexWrapBetween } from './wrap-between.js'
import { FlexWrapEvenly } from './wrap-evenly.js'
import { FlexWrapAround } from './wrap-around.js'
import { FlexWrapCenter } from './wrap-center.js'

export { FlexContainer, FlexColumn, FlexIt, FlexDisplay, FlexRow, FlexWrapAround, FlexWrapBetween, FlexWrapEvenly}

declare global {
  interface HTMLElementTagNameMap {
    'flex-column': FlexColumn;
    'flex-container': FlexContainer;
    'flex-it': FlexIt;
    'flex-row': FlexRow;
    'flex-display': FlexDisplay;
    'flex-wrap-around': FlexWrapAround;
    'flex-wrap-between': FlexWrapBetween;
    'flex-wrap-center': FlexWrapCenter;
    'flex-wrap-evenly': FlexWrapEvenly;
  }
}
