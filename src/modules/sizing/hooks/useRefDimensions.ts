// React
import { useState, useEffect, useRef, MutableRefObject } from 'react'

/**
 * Get the dimensions of a div element ref
 * @param ref A div element ref to get dimensions
 * @returns A object with the dimensions of the div element ref
 */
const useRefDimensions = (ref: MutableRefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const isMounted = useRef(false)

  useEffect(() => {
    const handleWindowResize = () => {
      const { width, height } = ref.current.getBoundingClientRect()
      setDimensions({ width, height })
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

export default useRefDimensions
