// Components
import Hero from '../components/pages/Hero'
import HomeLayout from '../components/layout/HomeLayout'
import WhatWeDo from '../components/pages/Home/WhatWeDo'

/**
 * The main page of the application
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <main>
          <Hero>
            <span>Design.</span><br className='lg:hidden' />
            <span>Branding.</span><br className='lg:hidden' />
            <span>Development</span><span className='lg:hidden'>.</span>
          </Hero>
          <WhatWeDo />
        </main>
      </HomeLayout>
    </>
  )
}

export default HomePage
