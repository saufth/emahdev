/** Use to define physic configuration */
export interface Physics {
  /** A decrease in the amplitude of an oscillation as a resistive forces */
  damping: number
  /** Quantitative measure of inertia */
  mass: number
  /** The resistance to a force causing a member to bend */
  stiffness: number
}
