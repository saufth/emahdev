// Components
import CallToAction from '../input/CallToAction'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Nav from './Nav'
// React
import { useState } from 'react'
// Hooks
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { motion, useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
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

/** Sidebar animation variants */
const sidebarVariants = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/** Sidebar content animation variants */
const sidebarNavbarVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0
  }
}

/** Sidebar content animation variants */
const sidebarContentVariants = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = ({ theme = 'light' }: Theme) => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true)
  // Animation
  const { width } = useDimensions()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsScrollOnTop(latestScrollY < 32)
  })

  return (
    <>
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

        <div className={styles.options}>
          <div className={styles.nav}>
            {isScrollOnTop ? <Nav primary theme={theme} /> : <CallToAction theme={theme} />}
          </div>
          <Menu action={() => toggleOpen()} theme={theme} />
        </div>
      </header>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={width}
      >
        <motion.header
          className={`${styles.navbar} ${styles.sidebarNavbar}`}
          variants={sidebarNavbarVariants}
        >
          <div>
            <Link href='/'>
              <div className={styles.logo}>
                <Image
                  alt='emah logomark'
                  src={themeConfig.dark.logo}
                  width={64}
                  height={48}
                  priority
                  className={styles.logomark}
                />
              </div>
            </Link>
          </div>

          <div className={styles.options}>
            <div className={styles.sidebarNavContact}>
              <CallToAction theme='dark' />
            </div>
            <div className={styles.sidebarClose} onClick={() => toggleOpen()}>
              Cerrar
            </div>
          </div>
        </motion.header>

        <motion.nav
          aria-label='Directorio emah'
          className={styles.sidebarContent}
          variants={sidebarContentVariants}
        >
          <div>
            Menu
          </div>
          <div className={styles.sidebarItem}>
            <Link href='/'>
              Inicio
            </Link>
          </div>
          {/* <div className={styles.sidebarItem}>
            <Link href='/services'>
              Servicios
            </Link>
          </div> */}
          <div className={styles.sidebarItem}>
            <Link href='/about'>
              Nosotros
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link href='/contact' className={styles.sidebarNavContact}>
              Contacto
            </Link>
            <div className={styles.sidebarNavAction}>
              <CallToAction large theme='dark' />
            </div>
          </div>
        </motion.nav>

        <motion.div
          className={styles.sidebarBackground}
          variants={sidebarVariants}
        />
      </motion.div>
    </>
  )
}

export default Navbar
