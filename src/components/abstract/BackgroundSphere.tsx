// Animation
import { motion, useScroll, useTransform } from 'framer-motion'
// Utils
import dynamic from 'next/dynamic'
// Styles
import styles from '../../styles/abstract/Background.module.css'

const Sphere = dynamic(() => import('../animation/Sphere'), {
  ssr: false
})

const BackgroundSphere = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 777], ['0%', '50%'])

  return (
    <motion.div
      style={{ y }}
      className={styles.backgroundSphere}
    >
      <Sphere />
    </motion.div>
  )
}

export default BackgroundSphere
