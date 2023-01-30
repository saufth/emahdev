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
  const { width, height } = useDimensions(scrollRef.current)
  // Scroll animation config
  const { scrollY } = useScroll()
  const physics = usePhysics()
  const containerTransform = useTransform(scrollY, [0, height], [0, -height])
  const containerSpring = useSpring(containerTransform, physics)
  // Sphere scroll animation
  const [
    sphereConfigOnWidth,
    setSphereConfigOnWidth
  ] = useState({ top: 0, minLimit: 0 })
  const [
    sphereConfigOnHeight,
    setSphereConfigOnHeight
  ] = useState({ maxLimit: 0, maxRange: 0 })
  const sphereY = useMotionValue(0)
  const sphereTransform = useTransform(sphereY, [0, sphereConfigOnHeight.maxRange], [0, height])
  const sphereSpring = useSpring(sphereTransform, physics)

  // Observe for width changes to update animation config
  useEffect(() => {
    const sphereTop = width > 576 ? 768 : 576
    setSphereConfigOnWidth({
      top: sphereTop,
      minLimit: sphereTop * 1.33
    })
    sphereY.set(sphereTop)
  }, [width, sphereY])

  // Observe for height changes to update animation config
  useEffect(() => {
    setSphereConfigOnHeight({
      maxLimit: height * 0.8,
      maxRange: height * 1.9
    })
  }, [height])

  // Sphere scroll animation event
  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    if (latestScrollY < 1) {
      sphereY.set(sphereConfigOnWidth.top)
    } else if (latestScrollY < sphereConfigOnWidth.minLimit) {
      sphereY.set(0)
    } else if (latestScrollY < sphereConfigOnHeight.maxLimit) {
      sphereY.set(sphereConfigOnWidth.top)
    } else {
      sphereY.set(0)
    }
  })

  return (
    <>
      <motion.div
        className={styles.scrollable}
        style={{ y: containerSpring }}
        ref={scrollRef}
      >
        {sphereConfigOnWidth.top}
        {children}
      </motion.div>

      <motion.div className={styles.sphere} style={{ y: sphereSpring }}>
        <Sphere />
      </motion.div>

      <div className={styles.background} />

      <div style={{ height }} />
    </>
  )
}

export default HomeLayout
