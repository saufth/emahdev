// Components
// import CallToAction from '../input/CallToAction'
// import Container from '../layout/Container'
// import Image from 'next/image'
// Utils
import dynamic from 'next/dynamic'
// Styles
import styles from '../../styles/sections/Hero.module.css'

const Sphere = dynamic(() => import('../animation/Sphere'), {
  ssr: false
})

/**
 * The hero section of the application
 * @returns Hero section component
 */
export default function Hero () {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>
        <div className={styles.header}>
          {/* <div className={styles.slogan}>
            Endless Possibilities
          </div> */}
          <h1 className={styles.heading}>
            Diseño.Desarrollo.Branding
          </h1>
        </div>
        {/* <CallToAction /> */}
      </div>

      {/* <div className={styles.imageContainer}>
        <Image
          alt='emah'
          src='/images/sections/hero/hero.png'
          width={640}
          height={640}
          className={styles.image}
          priority
        />
      </div> */}
      <div className={styles.background}>
        <Sphere />
      </div>
    </section>
  )
}
