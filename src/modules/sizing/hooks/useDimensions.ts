// React
import { useEffect, RefObject, useState } from 'react'
// Types
import { Dimensionable } from '../../../types/sizing'

/**
 * Get the dimensions of the window or a div element reference
 * @param ref A div element ref to get dimensions
 * @returns A object with the dimensions of the viewport or a div element reference
 */
const useDimensions = <ElementType extends HTMLElement>(ref?: RefObject<ElementType>) => {
  const [dimensions, setDimentions] = useState<Dimensionable>({ width: 0, height: 0 })

  useEffect(() => {
    const node = ref?.current
    setDimentions(node
      ? { width: node.offsetWidth, height: node.offsetHeight }
      : { width: window.innerWidth, height: window.innerHeight })
  }, [dimensions, ref])

  return dimensions
}

export default useDimensions
