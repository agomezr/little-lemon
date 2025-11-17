import './home.css'

import Hero from './Hero.tsx'
import Specials from './Specials.tsx'
import Testimonials from './Testimonials.tsx'
import Chicago from './Chicago.tsx'
import Footer from './Footer.tsx'
import Header from './Header.tsx'


export default function HomePage() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>

        <Hero/>

        <div className='md:mt-[200px] max-w-3xl mx-auto my-3 p-3'>
          <div className="flex flex-row align-center justify-between">
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
          </div>
          <Specials/>
        </div>

        <div className='bg-custom py-6'>
          <Testimonials/>
        </div>

        <Chicago/>

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
