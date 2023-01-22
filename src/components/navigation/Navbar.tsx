// Components
import CallToAction from '../input/CallToAction'
import Image from 'next/image'
import Link from 'next/link'
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

      <nav aria-label='emah Directorio' className={styles.nav}>
        <ul className={styles.list}>

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

          <CallToAction theme={theme} />

        </ul>
      </nav>

    </header>
  )
}

export default Navbar
