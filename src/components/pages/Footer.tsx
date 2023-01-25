// Styles
import styles from '../../styles/pages/Footer.module.css'
// Types
import { Theme } from '../../types/theme'
import CallToAction from '../input/CallToAction'

/**
 * The footer section of application
 * @see {@link Theme} for props definition
 * @param {Theme} Theme The Footer component porps
 * @returns Footer section component
 */
const Footer = ({ theme = 'light' }: Theme) => {
  const footerStyle = theme === 'dark' ? styles.footerDark : ''
  return (
    <footer className={footerStyle}>
      <div id='about' className={styles.philosophy}>
        <div className={styles.philosophyHeader}>
          <h2 className={styles.philosophyHeading}>
            Filosofía
          </h2>
          <p className={styles.philosophyDescription}>
            Menos es más
          </p>
        </div>
      </div>
      <div className={styles.foot}>
        <div className='text-lg md:text-xl file:underline'>
          info@emah.mx
        </div>
        <div className='text-base'>
          555-555-55-55
        </div>
        <div className='mt-4 md:hidden w-full'>
          <CallToAction large theme={theme} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
