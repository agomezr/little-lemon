import './home.css'
import logo from '/Logo.svg'
import Navigation from './Navigation.tsx'
import Hero from './Hero.tsx'
import Specials from './Specials.tsx'
import Testimonials from './Testimonials.tsx'
import About from './About.tsx'
import Footer from './Footer.tsx'


export default function Homepage() {

  return (
    <>
      <header className='flex flex-row items-center justify-between max-w-3xl mx-auto p-3'>
        <a href="/" title="Homepage">
          <img src={logo}  alt="logo" />
        </a>
        <nav>
          <Navigation/>
        </nav>
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

        <About/>
        

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
