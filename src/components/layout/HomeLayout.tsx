// React
import { useEffect, useRef, useState } from 'react'
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
  const [sphereTop, setSpheretop] = useState(0)
  const [sphereMinLimit, setSphereMinLimit] = useState(0)
  const [sphereMaxLimit, setSphereMaxLimit] = useState(0)
  const sphereY = useMotionValue(0)
  const transformSphere = useTransform(sphereY, [0, height * 1.9], [0, height])
  const springSphere = useSpring(transformSphere, physics)
  // Update the sphere animation configuration
  // Observe for width changes to update animation config
  useEffect(() => {
    const newInitialTop: number = width > 576 ? 768 : 576
    setSpheretop(newInitialTop)
    setSphereMinLimit(newInitialTop * 2)
    sphereY.set(sphereTop)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])
  // Init animation config and observe height changes
  useEffect(() => {
    setSphereMaxLimit(height * 0.8)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])
  // Sphere scroll animation event
  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    if (latestScrollY < 1) {
      sphereY.set(sphereTop)
    } else if (latestScrollY < sphereMinLimit * 0.76) {
      sphereY.set(0)
    } else if (latestScrollY < sphereMaxLimit) {
      sphereY.set(sphereTop)
    } else {
      sphereY.set(0)
    }
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

      <motion.div className={styles.sphere} style={{ y: springSphere }}>
        <Sphere />
      </motion.div>

      <div className={styles.background} />

      <div style={{ height }} />
    </>
  )
}

export default HomeLayout
