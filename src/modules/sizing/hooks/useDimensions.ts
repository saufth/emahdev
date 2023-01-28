// React
import { useEffect, useRef, RefObject } from 'react'
// Types
import { Dimensionable } from '../../../types/sizing'

/**
 * Get the dimensions of the viewport or a div element reference
 * @param ref A div element ref to get dimensions
 * @returns A object with the dimensions of the viewport or a div element reference
 */
const useDimensions = <ElementType extends HTMLElement>(ref?: RefObject<ElementType>) => {
  const dimensions = useRef<Dimensionable>({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current = ref?.current
      ? { width: ref.current.offsetWidth, height: ref.current.offsetHeight }
      : { width: window.innerWidth, height: window.innerHeight }
  }, [ref])

  return dimensions.current
}

export default useDimensions
