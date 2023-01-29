// Components
import Navbar from '../navigation/Navbar'
// React
import { useRef } from 'react'
// Hooks
import usePhysics from '../../modules/animation/hooks/usePhysics'
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Styles
import styles from '../../styles/layout/AboutLayout.module.css'
// Types
import { ParentProps } from '../../types/layout'

/**
 * A scrolleable container with ease effect for About page
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The child elements
 * @returns The AboutLayout component
 */
const AboutLayout = ({ children }: ParentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(scrollRef)
  // Scroll animation config
  const { scrollY } = useScroll()
  const physics = usePhysics()
  const transformContainer = useTransform(scrollY, [0, height], [0, -height])
  const springContainer = useSpring(transformContainer, physics)
  // Sphere animation config
  const transformImage = useTransform(scrollY, [0, (height * 1.4)], [0, -height])
  const springImage = useSpring(transformImage, physics)

  return (
    <>
      <Navbar theme='dark' />
      <motion.div
        className={styles.scrollable}
        style={{ y: springContainer }}
        ref={scrollRef}
      >
        {children}
      </motion.div>

      <motion.div className={styles.imageContainer} style={{ y: springImage }} />

      <div style={{ height }} />
    </>
  )
}

export default AboutLayout
