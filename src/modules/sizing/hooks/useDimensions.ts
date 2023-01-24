// React
import { useState, useEffect, useRef, RefObject } from 'react'
// Types
import { Dimensionable } from '../../../types/sizing'

/**
 * Get the dimensions of the viewport or a div element reference
 * @param ref A div element ref to get dimensions
 * @returns A object with the dimensions of the viewport or a div element reference
 */
const useDimensions = (ref?: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState<Dimensionable>({
    width: 0,
    height: 0
  })

  const isMounted = useRef(false)

  useEffect(() => {
    const handleWindowResize = () => {
      const node = ref?.current
      const newDimensions: Dimensionable = node
        ? node.getBoundingClientRect()
        : { width: window.innerWidth, height: window.innerHeight }
      setDimensions(newDimensions)
    }

    if (!isMounted.current) {
      handleWindowResize()
      isMounted.current = true
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [ref])

  return dimensions
}

export default useDimensions
