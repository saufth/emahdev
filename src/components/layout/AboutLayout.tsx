// Components
import Navbar from '../navigation/Navbar'
// React
import { useRef } from 'react'
// Hooks
import useRefDimensions from '../../modules/sizing/hooks/useRefDimensions'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Config
import { physicsConfig } from '../../modules/animation/config'
// Styles
import styles from '../../styles/layout/AboutLayout.module.css'
// Types
import { ParentProps } from '../../types/layout'
import Image from 'next/image'

/**
 * A scrolleable container with ease effect for About page
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The child elements
 * @returns The Home page layout component
 */
const AboutLayout = ({ children }: ParentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { height } = useRefDimensions(scrollRef)

  const { scrollY } = useScroll()

  const transformContainer = useTransform(scrollY, [0, height], [0, -height])
  const springContainer = useSpring(transformContainer, physicsConfig)

  const transformImage = useTransform(scrollY, [0, (height * 0.8)], [0, -height])
  const springImage = useSpring(transformImage, physicsConfig)

  return (
    <>
      <Navbar theme='dark' />
      <motion.div
        className={styles.scrollable}
        style={{ y: springContainer }}
        ref={scrollRef}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>

      <motion.div className={styles.imageContainer} style={{ y: springImage }}>
        <Image
          src='/images/sections/about/hero.jpg'
          alt='About emah'
          width={1920}
          height={1080}
          className={styles.image}
        />
      </motion.div>

      <div style={{ height }} />
    </>
  )
}

export default AboutLayout
