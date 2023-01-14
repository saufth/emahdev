// React
import { useRef } from 'react'
// Hooks
import useRefDimensions from '../../modules/sizing/hooks/useRefDimensions'
// Utils
import dynamic from 'next/dynamic'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Types
import { Physics } from '../../types/animation'
import { Parent } from '../../types/layout'

const Sphere = dynamic(() => import('../animation/Sphere'), {
  ssr: false
})

const physics: Physics = {
  damping: 16,
  mass: 0.12,
  stiffness: 55
}

const SmoothScroll = ({ children }: Parent) => {
  /** Scroll container */
  const scrollRef = useRef<HTMLDivElement>()

  const { height } = useRefDimensions(scrollRef)

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, height], [0, -height])
  const contentSpring = useSpring(transform, physics)
  const transformx = useTransform(scrollY, [0, (height * 1.88)], [0, -height])
  const sphereSpring = useSpring(transformx, physics)

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: contentSpring }}
        className='w-full fixed top-0 left-0 overflow-hidden will-change-transform'
      >
        {children}
      </motion.div>

      <motion.div
        style={{ y: sphereSpring }}
        className='w-full h-3xl fixed top-72 left-0 -z-40 will-change-transform'
      >
        <Sphere />
      </motion.div>

      <div style={{ height }} />
    </>
  )
}

export default SmoothScroll
