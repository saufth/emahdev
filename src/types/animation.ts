import { RefObject } from 'react'
import { MousePositionLayout } from './input'

/** Use to define physic configuration */
export interface Physics {
  /** A decrease in the amplitude of an oscillation as a resistive forces */
  damping: number
  /** Quantitative measure of inertia */
  mass: number
  /** The resistance to a force causing a member to bend */
  stiffness: number
}

/**
 * Used to configure the magnetic field animation
 */
export interface MagneticProps {
  /** The magnetic field ref for a div */
  fieldRef?: RefObject<HTMLDivElement>
  /** Rotation variant */
  rotation?: number
  /** Transition variant */
  transition?: number
  /** Define the orientation of transition and rotation */
  attraction?: boolean
  /** Layout to get mouse position */
  layout?: MousePositionLayout
}

export interface Axis {
  x: number
  y: number
}

export interface Transformable {
  transition: Axis
  rotation: Axis
}
