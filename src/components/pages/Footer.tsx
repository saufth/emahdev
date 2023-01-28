// Components
import Nav from '../navigation/Nav'
// Styles
import styles from '../../styles/pages/Footer.module.css'
// Types
import { Theme } from '../../types/theme'
import CallToAction from '../input/CallToAction'
import Link from 'next/link'

const initialTheme = 'light'

/**
 * The footer section of application
 * @see {@link Theme} for props definition
 * @param {Theme} Theme The Footer component porps
 * @returns Footer section component
 */
const Footer = ({ theme = initialTheme }: Theme) => {
  const footerStyle = theme !== initialTheme ? styles.footerDark : ''
  return (
    <footer className={footerStyle}>
      <div id='about' className={styles.philosophy}>
        <div className={styles.philosophyHeader}>
          <div className={styles.philosophyHeading}>
            emah
          </div>
          <div className={styles.philosophyDescription}>
            Endless Posibilities
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.footMail}>
          <Link href='mailto:info@emah.mx' target='_blank' rel='noreferrer'>
            info@emah.mx
          </Link>
        </div>
        <Nav theme={theme} />
        <div className={styles.footAction}>
          <CallToAction large theme={theme} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
