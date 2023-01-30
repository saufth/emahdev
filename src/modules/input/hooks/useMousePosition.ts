// React
import { useState, useEffect } from 'react'
// Types
import { MousePositionLayout } from '../../../types/input'

/**
 * Used to get the mouse position
 * @param ref A div ref to get the mouse position when its hovered
 * @param from Used to define the method to get the mouse position
 * @returns A object with the coordinates of the cursos
 */
const useMousePosition = (
  node: HTMLDivElement | null,
  from: MousePositionLayout = 'screen'
) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    if (node) {
      const handleMousePosition = (event: MouseEvent) => {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: event[`${from}X`],
            y: event[`${from}Y`]
          })
        })
      }
      node.addEventListener('mousemove', handleMousePosition)

      return () => {
        node.removeEventListener('mousemove', handleMousePosition)
      }
    }
  }, [node, from])

  return mousePosition
}

export default useMousePosition
