// React
import { RefObject, useEffect, useState } from 'react'
// Types
import { Dimensionable } from '../../../types/sizing'

/**
 * Get the dimensions of a div element reference or the window
 * @param ref The div element ref to get dimensions
 * @returns A object with the dimensions node
 */
const useDimensions = (ref?: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState<Dimensionable>({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      const node = ref?.current
      setDimensions(node
        ? { width: node.offsetWidth, height: node.offsetHeight }
        : { width: window.innerWidth, height: window.innerHeight }
      )
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [ref])

  return dimensions
}

export default useDimensions
