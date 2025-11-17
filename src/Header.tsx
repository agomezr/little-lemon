import Navigation from './Navigation'
import logo from '/Logo.svg'

function Header() {
  return (
    <div className='flex flex-row items-center justify-between max-w-3xl mx-auto p-3'>
      <a href="/" title="Homepage">
        <img src={logo}  alt="logo" />
      </a>
      <nav>
        <Navigation/>
      </nav>
    </div>
  )
}

export default Header