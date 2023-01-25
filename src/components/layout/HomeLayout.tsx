// React
import { useRef } from 'react'
// Hooks
import usePhysics from '../../modules/animation/hooks/usePhysics'
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  useMotionValueEvent,
  useMotionValue
} from 'framer-motion'
// Utils
import dynamic from 'next/dynamic'
// Styles
import styles from '../../styles/layout/HomeLayout.module.css'
// Types
import { ParentProps } from '../../types/layout'
import Navbar from '../navigation/Navbar'

/** Sphere component */
const Sphere = dynamic(() => import('../animation/Sphere'), {
  ssr: false
})

/**
 * Create a scrolleable container with ease effect for Home page
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The content of the scrollable container
 * @returns The About page layout component
 */
const HomeLayout = ({ children }: ParentProps) => {
  // Scroll
  const { scrollY } = useScroll()
  const physics = usePhysics()
  // Document
  const scrollRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(scrollRef)
  const transformContainer = useTransform(scrollY, [0, height], [0, -height])
  const springContainer = useSpring(transformContainer, physics)
  // Sphere
  const sphereY = useMotionValue(700)
  const transformSphere = useTransform(sphereY, [0, (height * 1.9)], [0, height])
  const springSphere = useSpring(transformSphere, physics)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    if (latestScrollY <= 1280) {
      sphereY.set((-latestScrollY) + 700)
    } else if (latestScrollY >= 3600) {
      sphereY.set(700)
    } else {
      sphereY.set(0)
    }
  })

  return (
    <>
      <Navbar />
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
