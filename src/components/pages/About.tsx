// Components
import Showcase from '../../components/data-display/Showcase'
// Styles
import styles from '../../styles/pages/About.module.css'
// Types
import { ShowcaseProps } from '../../types/data-display'

/** About page configuration */
const aboutUsConfig: ShowcaseProps[] = [
  {
    heading: 'Trabajamos en equipo',
    descriptions: [
      'Filosofía: Los negocios son opuestos a las matemáticas. Mientras que las matemáticas plantean que la mejor forma de sumar es multiplicar, los negocios, la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
      'Mas allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
    ],
    image: 'team'
  },
  {
    heading: 'Innovamos constantemente',
    descriptions: [
      'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
      'Para lograr generar innovaciones de valor es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
    ],
    image: 'innovate'
  },
  {
    heading: 'Transformamos problemas en oportunidades',
    descriptions: [
      'Problemas = áreas de oportunidad.',
      'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.',
      'La creatividad es un elemento clave en nuestro proceso de encontrar soluciones.'
    ],
    image: 'oportunity'
  },
  {
    heading: 'No asumimos',
    descriptions: [
      'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir en caso no tener certeza plena.',
      'Evitar el retrabajo dando indicaciones claras incrementa las probabilidades de que las cosas se hagan bien a la primera.',
      'El estudio de mercado estratégico es un pilar indispensable al momento de tomar decisiones que generen valor para el cliente.'
    ],
    image: 'assume'
  },
  {
    heading: 'Planeamos y ejecutamos con estrategia',
    descriptions: [
      'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar de un punto A (donde estamos) a un punto B (a donde se quiere llegar).',
      'Administrar con eficiencia los recursos disponibles.',
      'Siempre hay una forma óptima o mejor de hacer las cosas.',
      'El minimalismo y la metodología MVP son claves dentro de nuestra estrategia.'
    ],
    image: 'strategy'
  },
  {
    heading: 'Prevemos futuras tendencias',
    descriptions: [
      'Saber cuándo entrar y salir de cualquier oportunidad de negocio. Nada es eterno, todo tiene un ciclo, un punto alto y un punto bajo.',
      'Lo único constante es el cambio. Se tu quien decida los cambios en tu empresa, no el mercado que te obligue a hacerlo.'
    ],
    image: 'prevent'
  },
  {
    heading: 'Buscamos progreso, no perfección',
    descriptions: [
      'El mundo de los negocios es un juego infinito en el que no se tiene certeza plena de todos los elementos que están participando en el mercado ni la variabilidad de los mismos.  A lo máximo que se puede aspirar es a tener estimaciones.',
      '¿Qué sí está en nuestro control? El generar una cultura de progreso constante dentro de nuestra organización, aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio a esta cultura de progreso en cada rincón de la compañía.'
    ],
    image: 'progress'
  }
]

/**
 * The about us section of application
 * @returns About section component
 */
const AboutPage = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          Nosotros
        </h2>
        <p className={styles.description}>
          El éxito a corto, mediano y largo plazo de cualquier empresa no depende de un solo
          aspecto, sino de la sincronización de muchos. Aquí te presentamos los más importantes
          para nosotros, mismos que forman parte de nuestro ADN y que son clave en la generación
          de soluciones de valor para nuestros clientes
        </p>
      </header>
      <div className={styles.showcase}>
        {aboutUsConfig.map((about, key) => (
          <Showcase
            heading={about.heading}
            descriptions={about.descriptions}
            image={about.image}
            theme='dark'
            large
            reverse={key % 2 !== 0}
            key={key}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutPage
