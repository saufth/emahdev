// Types
import { ThemeProps } from './theme'

/** Generic arrow function type */
export type Action<P = undefined, R = void> = P extends undefined
  ? () => R
  : (arg: P) => R

/** Used to define the action property to components */
export interface Actionable<P = undefined, R = void> {
  /** The action to perform */
  action?: Action<P, R>
}

/** Layouts for MouseEvent to get the mouse position */
export type MousePositionLayout = 'screen' | 'offset' |'client'

/** The Menu component props */
export interface MenuProps extends ThemeProps, Actionable {}
