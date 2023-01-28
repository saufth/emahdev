// Components
import Footer from '../components/pages/Footer'
import SmoothLayout from '../components/layout/SmoothLayout'
import Contact from '../components/pages/Contact'

/**
* Contact page
* @returns The Contact page component
*/
const ContactPage = () => {
  return (
    <SmoothLayout>
      <main>
        <Contact />
      </main>
      <Footer theme='dark' />
    </SmoothLayout>
  )
}

export default ContactPage
