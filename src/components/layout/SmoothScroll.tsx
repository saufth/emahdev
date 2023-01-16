// Components
import Background from '../abstract/Background'
// React
import { useRef } from 'react'
// Hooks
import useRefDimensions from '../../modules/sizing/hooks/useRefDimensions'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Utils
import dynamic from 'next/dynamic'
// Types
import { Physics } from '../../types/animation'
import { Parent } from '../../types/layout'

/** Sphere component */
const Sphere = dynamic(() => import('../animation/Sphere'), {
  ssr: false
})

/** SmoothScroll physics configuration */
const physics: Physics = {
  damping: 16,
  mass: 0.12,
  stiffness: 55
}

/**
 * Create a scrolleable container with ease effect
 * @see {@link Parent} for props definitions
 * @param {Parent} Parent The content of the container
 * @returns A scrolleable div element with ease effect
 */
const SmoothScroll = ({ children }: Parent) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { height } = useRefDimensions(scrollRef)

  const { scrollY } = useScroll()
  const transformContent = useTransform(scrollY, [0, height], [0, -height])
  const springContent = useSpring(transformContent, physics)
  const transformSphere = useTransform(scrollY, [0, (height * 1.88)], [0, -height])
  const springSphere = useSpring(transformSphere, physics)

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: springContent }}
        className='w-full fixed top-0 left-0 overflow-hidden will-change-transform'
      >
        {children}
      </motion.div>

      <motion.div
        style={{ y: springSphere }}
        className='w-full h-2xl lg:h-3xl fixed top-96 lg:top-72 left-0 -z-40 will-change-transform'
      >
        <Sphere />
      </motion.div>

      <Background />

      <div style={{ height }} />
    </>
  )
}

export default SmoothScroll
