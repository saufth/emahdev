// Styles
import styles from '../../styles/sections/Hero.module.css'
// Types
import { HeroProps } from '../../types/sections'

/**
 * The hero section of the application
 * @see {@link HeroProps} for props definitions
 * @param {HeroProps} HeroProps The child elements
 * @returns The Hero section component
 */
const Hero = (
  {
    children,
    theme = 'light',
    space,
    size = 'lg'
  }: HeroProps
) => {
  const themeStyle = theme === 'dark' ? styles.themeDark : ''
  const spaceStyle = space ? styles.space : ''
  const contentStyle = `${themeStyle} ${spaceStyle}`

  const sizeStyle = size === 'lg' ? styles.textLarge : styles.textMedium
  const headingStyle = `${styles.heading} ${sizeStyle}`

  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1 className={headingStyle}>
          <div className={contentStyle}>
            {children}
          </div>
        </h1>
      </header>
    </section>
  )
}

export default Hero
