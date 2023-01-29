// Components
import Footer from '../components/pages/Footer'
import SmoothLayout from '../components/layout/SmoothLayout'
import ContactSection from '../components/pages/Contact'
import Hero from '../components/pages/Hero'

/**
* Contact page
* @returns The Contact page component
*/
const ContactPage = () => {
  return (
    <SmoothLayout>
      <main className='mt-48'>
        <Hero space theme='dark'>
          <span className='text-left tracking-normal'>
            <div className='text-base md:text-lg mb-2'>
              ¿Tienes algun proyecto en mente?
            </div>
            <div>
              Pongamonos en contacto
            </div>
          </span>
        </Hero>
        <ContactSection />
      </main>
      <Footer theme='dark' />
    </SmoothLayout>
  )
}

export default ContactPage
