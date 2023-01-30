// React
import { useEffect, useState } from 'react'
// Types
import { Dimensionable } from '../../../types/sizing'

/**
 * Get the dimensions of a div element reference or the window
 * @param node The div element ref to get dimensions
 * @param live Add a resize event listener to window
 * @returns A object with the dimensions node
 */
const useDimensions = (
  node?: HTMLDivElement | null,
  live: boolean = true
) => {
  const [dimensions, setDimensions] = useState<Dimensionable>({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      window.requestAnimationFrame(() => {
        setDimensions(node
          ? { width: node.offsetWidth, height: node.offsetHeight }
          : { width: window.innerWidth, height: window.innerHeight }
        )
      })
    }
    handleResize()
    if (live) {
      window.addEventListener('resize', handleResize)
      return () => { window.removeEventListener('resize', handleResize) }
    }
  }, [node, live])

  return dimensions
}

export default useDimensions
