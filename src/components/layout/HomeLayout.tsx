// React
import { useEffect, useRef, useState } from 'react'
// Hooks
import useRefDimensions from '../../modules/sizing/hooks/useRefDimensions'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Utils
// import dynamic from 'next/dynamic'
// Config
import { physicsConfig, physicsMobileConfig } from '../../modules/animation/config'
// Styles
import styles from '../../styles/layout/HomeLayout.module.css'
// Types
import { ParentProps } from '../../types/layout'
import Navbar from '../navigation/Navbar'
import { Physics } from '../../types/animation'

/** Sphere component */
// const Sphere = dynamic(() => import('../animation/Sphere'), {
//   ssr: false
// })

const sizeLimit = 768

/**
 * Create a scrolleable container with ease effect for Home page
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The content of the scrollable container
 * @returns The About page layout component
 */
const HomeLayout = ({ children }: ParentProps) => {
  const [physics, setPhysics] = useState<Physics>(physicsConfig)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { width, height } = useRefDimensions(scrollRef)

  const { scrollY } = useScroll()

  const transformContainer = useTransform(scrollY, [0, height], [0, -height])
  const springContainer = useSpring(transformContainer, physics)

  // const transformSphere = useTransform(scrollY, [0, (height * 1.88)], [0, -height])
  // const springSphere = useSpring(transformSphere, physics)

  useEffect(() => {
    const currentPhysics = width >= sizeLimit ? physicsConfig : physicsMobileConfig
    setPhysics(currentPhysics)
  }, [physics, width])

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

      {/* <motion.div
        className={styles.sphere}
        style={{ y: springSphere }}
      >
        <Sphere />
      </motion.div> */}

      <div className={styles.background} />

      <div style={{ height }} />
    </>
  )
}

export default HomeLayout
