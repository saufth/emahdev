// Styles
import styles from '../../styles/sections/WhatWeDo.module.css'
import Showcase from '../data-display/Showcase'
import Link from '../navigation/Link'

/**
 * This section specifies what organization does
 * @returns WhatWeDo section component
 */
const WhatWeDo = () => {
  return (
    <section id='whatwedo' className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Lo Que Hacemos
        </h2>
        <p className={styles.description}>
          Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad.
        </p>
        <Link href='nosotros'>
          Ver más
        </Link>
      </div>
      <div className={styles.showcase}>
        <Showcase
          heading='Design'
          description='No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre, un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'
          image='design'
        />
        <Showcase
          heading='Branding'
          description='Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Ademas, renovamos marcas existentes.'
          image='branding'
        />
        <Showcase
          heading='Development'
          description='Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito mas grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, generen una experiencia positiva y mueva tus emociones.'
          image='development'
        />
      </div>
      <div id='about' className='h-xl grid place-content-center'>
        <div className='text-center space-y-3'>
          <h2 className='text-lg md:text-xl text-white/80'>
            Filosofía
          </h2>
          <p className='font-proxima-soft-medium text-5xl md:text-6xl'>
            Menos es más
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
