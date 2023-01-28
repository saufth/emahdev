// Types
import { ParentProps } from './layout'
import { Theme } from './theme'

/** The Hero component props */
export interface HeroProps extends ParentProps, Theme {
  /** Heading text sizes */
  text?: 'md' | 'lg'
  /** Define the space in X axis */
  space?: boolean
  /** Define the container height */
  height?: boolean
}
