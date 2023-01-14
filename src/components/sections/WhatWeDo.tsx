// Styles
import styles from '../../styles/sections/WhatWeDo.module.css'
import Showcase from '../data-display/Showcase'

/**
 * This section specifies what organization does
 * @returns WhatWeDo section component
 */
export default function WhatWeDo () {
  return (
    <article id='about'>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Lo Que Hacemos
        </h2>
        <p className={styles.description}>
          Desarrollamos websites, apps y branding en sincronía con
          marketing. Impulsamos empresas con visión, a fin de crear
          un legado de progreso y verdad.
        </p>
      </div>
      <Showcase
        heading='Branding'
        description='Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Ademas, renovamos marcas existentes.'
        image='hero'
      />
    </article>
  )
}
