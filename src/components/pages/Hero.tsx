// Styles
import styles from '../../styles/pages/Hero.module.css'
// Types
import { HeroProps } from '../../types/pages'

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
    text = 'lg',
    height
  }: HeroProps
) => {
  const sectionStyle = `${styles.section} ${height ? styles.sectionHeight : ''}`
  const themeStyle = theme === 'dark' ? styles.themeDark : ''
  const spaceStyle = space ? styles.space : ''
  const contentStyle = `${themeStyle} ${spaceStyle}`
  const sizeStyle = text === 'lg' ? styles.textLarge : styles.textMedium
  const headingStyle = `${styles.heading} ${sizeStyle}`

  return (
    <section className={sectionStyle}>
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
