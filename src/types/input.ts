// Types
import { ThemeProps } from './theme'

/** Layouts for MouseEvent to get the mouse position */
export type MousePositionLayout = 'screen' | 'offset' |'client'

/** The CallToAction component props */
export interface CallToActionProps extends ThemeProps {
  /** Set button width to 100% and height large */
  large?: boolean
}
