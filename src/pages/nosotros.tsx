// Components
// import About from '../components/layout/About'

import AboutLayout from '../components/layout/AboutLayout'
import Hero from '../components/sections/Hero'

/**
 * About us page
 * @returns About page component
 */
const AboutPage = () => {
  return (
    <AboutLayout>
      <Hero theme='dark' size='md' space>
        <span>
          Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad
        </span>
      </Hero>
    </AboutLayout>
  )
}

export default AboutPage
