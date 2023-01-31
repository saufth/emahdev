// Components
import CallToAction from '../navigation/CallToAction'
import Link from 'next/link'
import Nav from '../navigation/Nav'
// Next router
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
// Styles
import styles from '../../styles/pages/Footer.module.css'
// Types
import { Theme } from '../../types/theme'

/**
 * The footer section of application
 * @see {@link WithRouterProps} for props definition
 * @param {WithRouterProps} WithRouterProps The Footer component porps
 * @returns Footer section component
 */
const Footer = ({ router }: WithRouterProps) => {
  const theme: Theme = router.pathname === '/' ? 'light' : 'dark'
  const footerStyle = `${styles.section} ${theme !== 'light' ? styles.footerDark : ''}`
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

export default withRouter(Footer)
