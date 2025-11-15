import './App.css'
import logo from '/Logo.svg'
import Navigation from './Navigation.tsx'
import Hero from './Hero.tsx'
import Specials from './Specials.tsx'


function App() {

  return (
    <>
    
      <header className='flex flex-row items-center justify-between max-w-3xl mx-auto p-3'>
        <img src={logo} className="App-logo" alt="logo" />
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
      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
