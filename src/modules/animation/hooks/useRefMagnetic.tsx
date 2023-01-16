// React
import { useEffect, useRef, RefObject } from 'react'
// Hooks
import useRefDimensions from '../../sizing/hooks/useRefDimensions'
import useRefMousePosition from '../../input/hooks/useRefMousePosition'
// Types
import { MousePositionLayout } from '../../../types/input'

/**
 * Used to configure the magnetic field
 */
interface MagneticProps {
  /**
   * The magnetic field ref for a div
   */
  fieldRef?: RefObject<HTMLDivElement>
  /**
   * Rotation variant
   */
  rotation?: number
  /**
   * Transition variant
   */
  transition?: number
  /**
   * Define the orientation of transition and rotation
   */
  attraction?: boolean
  /**
   * Layout to get mouse position
   */
  layout?: MousePositionLayout
}

interface Axis {
  x: number
  y: number
}

interface Transformable {
  transition: Axis
  rotation: Axis
}

/**
 * Used to increase the magnetic force.
 * ej. 1.18 = 18%
 */
const strength = 1.18

/**
 * Creates a magnetic field animation when the selected layout is hovered
 * @see {@link MagneticProps} for props definition
 * @param {MagneticProps} MagneticProps Magnetic props
 * @returns A magnetic ref for a div
 */
const useRefMagnetic = (
  {
    fieldRef,
    rotation = 0,
    transition = 0,
    attraction = true,
    layout = 'offset'
  }: MagneticProps
) => {
  const magnetRef = useRef<HTMLDivElement>(null)

  const magneticField = fieldRef || magnetRef

  const mousePosition = useRefMousePosition(magneticField, layout)
  const dimensions = useRefDimensions(magneticField)

  useEffect(() => {
    const halfWidth = dimensions.width / 2
    const halfHeight = dimensions.height / 2

    const orientation = attraction ? 1 : -1

    const updateTransformStyle = ({ transition, rotation }: Transformable) => {
      const node = magnetRef.current
      if (node) {
        node.style.transform = `
        translate3d(${transition.x}px, ${transition.y}px, 0px)
        rotateX(${rotation.x}deg)
        rotateY(${rotation.y}deg)
      `
      }
    }

    const variationX = (mousePosition.x - halfWidth) / halfWidth
    const variationY = (mousePosition.y - halfHeight) / halfHeight

    const transform = {
      transition: {
        x: (variationX * (transition * strength)) * orientation,
        y: (variationY * transition) * orientation
      },
      rotation: {
        x: (variationY * (rotation * strength)) * orientation,
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
