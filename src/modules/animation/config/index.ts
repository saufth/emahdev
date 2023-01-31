// Types
import { Physics } from '../../../types/animation'

/** Used to create a smooth scroll */
export const physicsConfig: Physics = {
  damping: 18,
  mass: 0.33,
  stiffness: 55
}

/** Used to create a smooth scroll for mobile */
export const physicsMobileConfig: Physics = {
  damping: 18,
  mass: 0.12,
  stiffness: 64
}
