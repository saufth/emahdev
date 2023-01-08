// Types
import { ReactNode } from 'react'

/**
 * Layout props
 */
export interface LayoutProps {
  /**
   * The children of the layout
   */
  children: ReactNode
}

/**
 * Define the layout alignment types
 */
export type Alignment = 'start'
  | 'center'
  | 'end'
  | 'row-start'
  | 'row-center'
  | 'row-end'
  | 'row-between'
  | 'row-center-start'
  | 'row-between-start'

/**
 * Alignment configuration for Conatiner component
 */
export interface AligmentConfig {
  /**
   * Set the content in a column and align the items to strat
   */
  start: string
  /**
   * Set the content in a column and align the items to center
   */
  center: string
  /**
   * Set the content in a column and align the items to end
   */
  end: string
  /**
   * Set the content in a row and align the items to start
   */
  'row-start': string
  /**
   * Set the content in a row and align the items to center
   */
  'row-center': string
  /**
   * Set the content in a row and align the items to end
   */
  'row-end': string
  /**
   * Set the content in a row and align the items with space between
   */
  'row-between': string
  /**
   * Set the content in a row, justify on center and aling on start
   */
  'row-center-start': string
  /**
   * Set the content in a row, justify items with between and aling on start
   */
  'row-between-start': string
}

/**
 * Container component props
 */
export interface ContainerProps extends LayoutProps {
  /**
   * Set max width defined on styles and margin X auto
   */
  auto?: boolean
  /**
   * Set height to 100%
   */
  fullHeight?: boolean
  /**
   * Set a padding to Y axis defined on styles
   */
  space?: boolean
  /**
   * Set the container position on relative
   */
  relative?: boolean
  /**
   * Define content alignment
   */
  alignment?: Alignment
}
