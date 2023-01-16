// Styles
import styles from '../../styles/sections/Hero.module.css'

/**
 * The hero section of the application
 * @returns Hero section component
 */
const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <span>Design.</span><br className='lg:hidden' />
          <span>Branding.</span><br className='lg:hidden' />
          <span>Development</span>
        </h1>
      </header>
    </section>
  )
}

export default Hero
