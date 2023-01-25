// Types
import { Theme } from './theme'

/** Layouts for MouseEvent to get the mouse position */
export type MousePositionLayout = 'screen' | 'offset' |'client'

/** The CallToAction component props */
export interface CallToActionProps extends Theme {
  /** Set button width to 100% */
  fullWidth?: boolean
}
