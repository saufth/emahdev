// Types
import { ThemeProps } from './theme'

/** Showcase component props */
export interface ShowcaseProps extends ThemeProps {
  /** Heading of the showcase */
  heading: string
  /** Description of the showcase */
  descriptions: string[]
  /** Image to use on the showcase */
  image: 'design'
    | 'branding'
    | 'development'
    | 'team'
    | 'innovate'
    | 'oportunity'
    | 'assume'
    | 'strategy'
    | 'prevent'
    | 'progress'
  /** Set the call to action button */
  action?: boolean
  /** Set the demo width to large */
  large?: boolean
  /** Invert the order of content */
  reverse?: boolean
}
