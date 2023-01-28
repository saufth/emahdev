// Types
import { Theme } from './theme'

/** Link component props */
export interface LinkProps {
  /** Link text */
  children: string
  /** Reference to redirect */
  href: string
}

/** Nav component props */
export interface NavProps extends Theme {
  /**
   * Set the CallToAction component instead of the contact link,
   * is commonly used for the navbar
   */
  primary?: boolean
}

/** The Menu component props */
export interface MenuProps extends Theme {
  /** The action of the menu button */
  action?: () => void
}
