// Components
import Link from '../../navigation/Link'
import Showcase from '../../data-display/Showcase'
// Types
import { ShowcaseProps } from '../../../types/data-display'
// Styles
import styles from '../../../styles/pages/WhatWeDo.module.css'

/** Organization services configuration */
const servicesConfig: ShowcaseProps[] = [
  {
    heading: 'Design',
    descriptions: ['No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre, un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'],
    image: 'design'
  },
  {
    heading: 'Branding',
    descriptions: ['Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Ademas, renovamos marcas existentes.'],
    image: 'branding'
  },
  {
    heading: 'Development',
    descriptions: ['Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito mas grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, generen una experiencia positiva y mueva tus emociones.'],
    image: 'development'
  }
]

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
          Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad
        </p>
        <Link href='about'>
          Saber más
        </Link>
      </div>
      <div className={styles.showcase}>
        {servicesConfig.map((service, key) => (
          <Showcase
            heading={service.heading}
            descriptions={service.descriptions}
            image={service.image}
            action
            reverse={key % 2 !== 0}
            key={key}
          />
        ))}
      </div>

    </section>
  )
}

export default WhatWeDo
