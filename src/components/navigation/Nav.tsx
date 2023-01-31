// Components
import CallToAction from './CallToAction'
import Link from 'next/link'
// Styles
import styles from '../../styles/navigation/Nav.module.css'
// Types
import { LinkProps, NavProps } from '../../types/navigation'

/** The navigation configuration */
const navConfig: LinkProps[] = [
  {
    children: 'Inicio',
    href: '/'
  },
  {
    children: 'Nosotros',
    href: '/about'
  },
  // {
  //   children: 'Servicios',
  //   href: '/services'
  // },
  {
    children: 'Contacto',
    href: '/contact'
  }
]

/**
* The main navigation of the application
* @see {@link Theme} for props definition
* @param {Theme} Theme The component theme
* @returns The Nav component
*/
const Nav = ({ primary, theme = 'light' }: NavProps) => {
  const navOptions = primary ? navConfig.slice(0, -1) : navConfig
  const navStyle = `${styles.nav} ${theme !== 'light' ? styles.navDark : ''}`

  return (
    <nav aria-label='Directorio emah' className={navStyle}>
      {navOptions.map((option, key) => {
        return (
          <Link href={option.href} key={key}>
            {option.children}
          </Link>
        )
      })}
      {primary ? (<CallToAction theme={theme} />) : null}
    </nav>
  )
}

export default Nav
