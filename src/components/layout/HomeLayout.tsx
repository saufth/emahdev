// React
import { useRef } from 'react'
// Hooks
import usePhysics from '../../modules/animation/hooks/usePhysics'
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Utils
import dynamic from 'next/dynamic'
// Animation
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  useMotionValueEvent,
  useMotionValue
} from 'framer-motion'
// Styles
import styles from '../../styles/layout/HomeLayout.module.css'
// Types
import { ParentProps } from '../../types/layout'

/** Sphere component */
const Sphere = dynamic(() => import('../animation/Sphere'), {
  ssr: false
})

/**
 * Create a scrolleable container with ease effect for Home page
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The content of the scrollable container
 * @returns The HomeLayout component
*/
const HomeLayout = ({ children }: ParentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { width, height } = useDimensions(scrollRef)
  // Scroll animation config
  const { scrollY } = useScroll()
  const physics = usePhysics()
  const transformContainer = useTransform(scrollY, [0, height], [0, -height])
  const springContainer = useSpring(transformContainer, physics)
  // Sphere scroll animation
  const sphereMinLimit = width >= 576 ? 700 : 576
  const sphereMaxLimit = height * 0.8
  const sphereY = useMotionValue(sphereMinLimit)
  const transformSphere = useTransform(sphereY, [0, (sphereMinLimit * 1.9)], [0, sphereMinLimit])
  const springSphere = useSpring(transformSphere, physics)
  // Sphere scroll animation event
  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    latestScrollY < sphereMinLimit
      ? sphereY.set(sphereMinLimit - latestScrollY)
      : latestScrollY < sphereMaxLimit ? sphereY.set(0) : sphereY.set(sphereMinLimit)
  })

  return (
    <>
      <motion.div
        className={styles.scrollable}
        style={{ y: springContainer }}
        ref={scrollRef}
      >
        {children}
      </motion.div>

      <motion.div
        className={styles.sphere}
        style={{ y: springSphere }}
      >
        <Sphere />
      </motion.div>

      <div className={styles.background} />

      <div style={{ height }} />
    </>
  )
}

export default HomeLayout
