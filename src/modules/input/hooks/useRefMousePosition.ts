// React
import {
  useState,
  useEffect,
  MutableRefObject
} from 'react'
// Types
import { MousePositionLayout } from '../../../types/input'

/**
 * Used to get the mouse position
 * @param ref A div ref to get the mouse position when its hovered
 * @param from Used to define the method to get the mouse position
 * @returns A object with the coordinates of the cursos
 */
const useRefMousePosition = (
  ref: MutableRefObject<HTMLDivElement>,
  from: MousePositionLayout = 'screen'
) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const node = ref.current

    const handleMousePosition = (event: MouseEvent) => {
      setMousePosition({
        x: event[`${from}X`],
        y: event[`${from}Y`]
      })
    }

    if (node) {
      node.addEventListener('mousemove', handleMousePosition)

      return () => {
        node.removeEventListener('mousemove', handleMousePosition)
      }
    }
  }, [ref, from])

  return mousePosition
}

export default useRefMousePosition
