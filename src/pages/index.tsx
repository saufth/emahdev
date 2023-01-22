// Components
import Hero from '../components/sections/Hero'
import HomeLayout from '../components/layout/HomeLayout'
import WhatWeDo from '../components/sections/WhatWeDo'

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
            <span>Development</span>
          </Hero>
          <WhatWeDo />
        </main>
      </HomeLayout>
    </>
  )
}

export default HomePage
