// Hooks
import { useEffect, useRef, MutableRefObject } from 'react'
import useRefDimensions from '../../sizing/hooks/useRefDimensions'
import useRefMousePosition from '../../input/hooks/useRefMousePosition'

interface MagneticProps {
  fieldRef: MutableRefObject<HTMLDivElement>
  rotation: number
  transition: number
  attraction: boolean
  layout: 'offset'
}

const increase = 1.18

const useRefMagnetic = (
  {
    fieldRef,
    rotation = 0,
    transition = 0,
    attraction = true,
    layout = 'offset'
  }: MagneticProps
) => {
  const magnetRef = useRef<HTMLDivElement>()

  const magneticField = fieldRef || magnetRef

  const mousePosition = useRefMousePosition(magneticField, layout)
  const dimensions = useRefDimensions(magneticField)

  useEffect(() => {
    const halfWidth = dimensions.width / 2
    const halfHeight = dimensions.height / 2

    const orientation = attraction ? 1 : -1

    const updateTransformStyle = ({ transition, rotation }) => {
      magnetRef.current.style.transform = `
      translate3d(${transition.x}px, ${transition.y}px, 0px)
      rotateX(${rotation.x}deg)
      rotateY(${rotation.y}deg)
    `
    }

    const variationX = (mousePosition.x - halfWidth) / halfWidth
    const variationY = (mousePosition.y - halfHeight) / halfHeight

    const transform = {
      transition: {
        x: (variationX * (transition * increase)) * orientation,
        y: (variationY * transition) * orientation
      },
      rotation: {
        x: (variationY * (rotation * increase)) * orientation,
        y: (variationX * rotation) * (-orientation)
      }
    }

    const handleMagnetic = () => {
      updateTransformStyle(transform)
    }

    const handleMouseOut = () => {
      updateTransformStyle({
        transition: { x: 0, y: 0 },
        rotation: { x: 0, y: 0 }
      })
    }

    const node = magneticField.current

    if (node) {
      node.addEventListener('mousemove', handleMagnetic)
      node.addEventListener('mouseout', handleMouseOut)

      return () => {
        node.removeEventListener('mousemove', handleMagnetic)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [mousePosition, magneticField, rotation, transition, attraction, dimensions])

  return magnetRef
}

export default useRefMagnetic
