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

const initialTheme = 'light'

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = ({ theme = initialTheme }: Theme) => {
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

      <div className='flex items-center gap-x-4 md:gap-x-5'>
        <div className='hidden md:block'>
          <Nav primary theme={theme} />
        </div>
        <div className='w-7 flex flex-col gap-y-1.5 [&>span]:w-6 [&>span]:h-0.75 [&>span]:bg-white [&>span]:rounded-sm first:[&>span]:self-end'>
          <span />
          <span />
        </div>
      </div>
    </header>
  )
}

export default Navbar
