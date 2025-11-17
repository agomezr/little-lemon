import { Link } from 'react-router-dom';
import logo from '/logo-vertical.png';


function Footer() {
  return (
    <div className="bg-custom">
      <div className="container mx-auto py-5">
        <div className="px-3 md:mx-[50px] lg:mx-[100px] xl:mx-[200px]">
          <div className="flex flex-col items-center md:flex-row md:items-start! md:justify-around">
            <img src={logo} alt="Little Lemon Logo" loading="lazy" className='mb-3 md:mb-0 w-[150px]'/>
            <div className="my-3">
              <h3 className='text-2xl'>Navigation</h3>
              <nav>
                <ul className='ml-2'>
                  <li>
                    <Link to="/" title="Home">Home</Link>
                  </li>
                  <li>
                    <a href="#about-us" title="About">About</a>
                  </li>
                  <li>
                    <a href="#" title="Menu">Menu</a>
                  </li>
                  <li>
                    <Link to="/reservations" title="Reservations">Reservations</Link>
                  </li>
                  <li>
                    <a href="#" title="Order Online">Order Online</a>
                  </li>
                  <li>
                    <a href="#" title="Login">Login</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="my-3">
              <h3 className='text-2xl'>Contact</h3>
              <nav>
                <ul className='ml-2'>
                  <li>
                    <a href="#" title="Address">Address</a>
                  </li>
                  <li>
                    <a href="#" title="Phone number">Phone number</a>
                  </li>
                  <li>
                    <a href="#" title="Email">Email</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="my-3">
              <h3 className='text-2xl'>Social Media</h3>
              <nav>
                <ul className='ml-2'>
                  <li>
                    <a href="#" title="Social 1" target="_blank" rel="noopener noreferrer">Social 1</a>
                  </li>
                  <li>
                    <a href="#" title="Social 2" target="_blank" rel="noopener noreferrer">Social 2</a>
                  </li>
                  <li>
                    <a href="#" title="Social 3" target="_blank" rel="noopener noreferrer">Social 3</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer