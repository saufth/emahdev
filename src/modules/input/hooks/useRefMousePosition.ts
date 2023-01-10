// Hooks
import {
  useState,
  useEffect,
  MutableRefObject
} from 'react'

type MousePositionLayout = 'screen' | 'offset'

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
