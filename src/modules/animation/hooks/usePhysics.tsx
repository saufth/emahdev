// React
import { useEffect, useState } from 'react'
// Hooks
import useDimensions from '../../sizing/hooks/useDimensions'
// Config
import { physicsConfig, physicsMobileConfig } from '../config'
// Types
import { Physics } from '../../../types/animation'

const sizeLimit = 768

/**
 * Used to define de physics configuration when width change
 * @returns Physics configuration
 */
const usePhysics = () => {
  const [physics, setPhysics] = useState<Physics>(physicsConfig)

  const { width } = useDimensions()

  useEffect(() => {
    const currentPhysics = width >= sizeLimit ? physicsConfig : physicsMobileConfig
    setPhysics(currentPhysics)
  }, [physics, width])

  return physics
}

export default usePhysics
