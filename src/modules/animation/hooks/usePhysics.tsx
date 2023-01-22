// React
import { RefObject, useEffect, useState } from 'react'
// Hooks
import useRefDimensions from '../../sizing/hooks/useRefDimensions'
// Config
import { physicsConfig, physicsMobileConfig } from '../config'
// Types
import { Physics } from '../../../types/animation'

const sizeLimit = 768

/**
 * Used to define de physics configuration when width change
 * @param ref A div reference
 * @returns Physics configuration
 */
const usePhysics = (ref: RefObject<HTMLDivElement>) => {
  const [physics, setPhysics] = useState<Physics>(physicsConfig)

  const { width } = useRefDimensions(ref)

  useEffect(() => {
    const currentPhysics = width >= sizeLimit ? physicsConfig : physicsMobileConfig
    setPhysics(currentPhysics)
  }, [physics, width])

  return physics
}

export default usePhysics
