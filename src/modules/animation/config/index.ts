// Types
import { Physics } from '../../../types/animation'

/** Used to create a smooth scroll */
export const physicsConfig: Physics = {
  damping: 18,
  mass: 1,
  stiffness: 33
}

/** Used to create a smooth scroll for mobile */
export const physicsMobileConfig: Physics = {
  damping: 16,
  mass: 0.33,
  stiffness: 64
}
