// Styles
import styles from '../../styles/sections/Hero.module.css'

/**
 * The hero section of the application
 * @returns Hero section component
 */
export default function Hero () {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            Branding.Design.Development
          </h1>
        </header>
      </div>
    </section>
  )
}
