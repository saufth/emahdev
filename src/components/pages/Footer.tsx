// Components
import CallToAction from '../input/CallToAction'
import Link from 'next/link'
// Styles
import styles from '../../styles/pages/Footer.module.css'
// Types
import { LinkProps } from '../../types/navigation'
import { Theme } from '../../types/theme'

const navigationOptions: LinkProps[] = [
  {
    children: 'Inicio',
    href: '/'
  },
  {
    children: 'Servicios',
    href: '/#whatwedo'
  },
  {
    children: 'Nosotros',
    href: '/nosotros'
  },
  {
    children: 'Contacto',
    href: '/contacto'
  }
]

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
        <div className='text-2xl underline'>
          info@emah.mx
        </div>
        <nav aria-label='Directorio emah' className={styles.footNav}>
          <div className={styles.footNavList}>
            {navigationOptions.map(({ children, href }, key) => (
              <Link href={href} key={key}>
                {children}
              </Link>
            ))}
          </div>
          <div className={styles.footNavAction}>
            <CallToAction large theme={theme} />
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
