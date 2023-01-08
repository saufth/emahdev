// Components
import Container from '../layout/Container'
// Styles
// import styles from '../../styles/sections/Services.module.css'

/**
 * This section specifies the organization services
 * @returns Services section component
 */
export default function Services () {
  return (
    <section>
      <Container auto space>
        <div className='space-y-16'>
          <div className='w-2xl space-y-8'>
            <h2>Nuestros servicios</h2>
            <p className='font-supermolot-medium text-2xl'>
              Somos más que una agencia creativa, también somos un centro de
              inteligencia. No solo somos expertos con los medios digital, también dominamos
              los medios offline. Creamos marcas nuevas e impulsamos a las existentes
              a encontrar su lugar en el mercado.
            </p>
          </div>
          <ul className='flex gap-8 [&>li]:w-72 [&>li]:pt-6 [&>li]:space-y-4 [&>li]:border-t-[3px] [&>li]:border-emah-blue'>
            <li>
              <h3 className='text-3xl'>
                Branding
              </h3>
              <p className='pr-6 text-lg'>
                Naming, diseño de logo, identidad visual, identidad de marca, diseño de producto
                y empaque, brand culture.
              </p>
            </li>
            <li>
              <h3 className='text-3xl'>
                Marketing
              </h3>
              <p className='pr-6 text-lg'>
                Campañas eficientes y creativas, websites + apps, marketing de contenidos,
                social & influencer marketing, consultoría.
              </p>
            </li>
            <li>
              <h3 className='text-3xl'>
                In-House team
              </h3>
              <p className='pr-6 text-lg'>
                Sin duda la mejor solución es tener tu propio equipo en casa.
                Nosotros creamos un espacio solo para atenderte.
              </p>
            </li>
            <li>
              <h3 className='text-3xl'>
                Bespoke solutions
              </h3>
              <p className='pr-6 text-lg'>
                Existen proyectos que necesitan soluciones hechas a la medida.
                Contáctanos y nos pondremos manos a la obra.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
