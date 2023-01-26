// Components
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'
// Types
import { Theme } from '../../types/theme'

/** Theme configuration for Navbar */
const themeConfig = {
  light: {
    logo: '/images/logotype/logomark-white.svg'
  },
  dark: {
    logo: '/images/logotype/logomark.svg'
  }
}

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = ({ theme = 'light' }: Theme) => {
  return (
    <header className={styles.navbar}>
      <div>
        <Link href='/'>
          <div className={styles.logo}>
            <Image
              alt='emah logomark'
              src={themeConfig[theme].logo}
              width={64}
              height={48}
              priority
              className={styles.logomark}
            />
          </div>
        </Link>
      </div>

      <Nav primary theme={theme} />
    </header>
  )
}

export default Navbar
