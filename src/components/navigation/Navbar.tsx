'use client'
// Components
import CallToAction from '../input/CallToAction'
import Image from 'next/image'
import Link from 'next/link'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'

/**
 * The main navbar of application
 * @returns Navbar component
 */
export default function Navbar () {
  return (
    <header className={styles.navbar}>

      <nav aria-label='emah Directorio' className={styles.nav}>
        <ul className={styles.list}>

          <div>
            <Link href='/'>
              <div className={styles.logo}>
                <Image
                  alt='emah logomark'
                  src='/images/logotype/logomark-white.svg'
                  width={64}
                  height={48}
                  priority
                  className={styles.logomark}
                />
              </div>
            </Link>
          </div>

          <CallToAction />

        </ul>
      </nav>

    </header>
  )
}
