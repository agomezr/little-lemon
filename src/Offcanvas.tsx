import { useState } from "react";
import logo from '/Logo.svg';
import hamburguer from '/icon_hamburger.svg';
import { Link } from "react-router-dom";

export default function Offcanvas() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
    <div className="text-end">
      <button id="toggler-menu" className="p-4 md:hidden" onClick={() => setOpen(true)}>
        <img src={hamburguer} className="w-5 h-5" alt="Toggle menu offcanvas"/>
      </button>
    </div>

    <div id="offcanvas-menu" 
    className={` ${open ? '': 'translate-x-full'} bg-white fixed top-0 right-0 w-64 h-full shadow-xl transform transition-transform duration-300 z-50 md:hidden`}>
        <div className="p-4">
            <div className="text-end">
              <button id="close-menu" className="text-xl" onClick={() => setOpen(false)}>&times; </button>
            </div>
            <img src={logo} className="w-[80%] mx-auto mb-3" alt="logo" />
            <nav>
                <Link to="/" className="block py-2 px-3 hover:bg-custom rounded" title="Home">Home</Link>
                <a href="#" className="block py-2 px-3 hover:bg-custom rounded" title="About">About</a>
                <a href="#" className="block py-2 px-3 hover:bg-custom rounded" title="Menu">Menu</a>
                <Link to="/reservations" className="block py-2 px-3 hover:bg-custom rounded" title="Reservations">Reservations</Link>
                <a href="#" className="block py-2 px-3 hover:bg-custom rounded" title="Order online">Order online</a>
                <a href="#" className="block py-2 px-3 hover:bg-custom rounded" title="Login">Login</a>
            </nav>
        </div>
    </div>

    <div id="menu-overlay" 
    className={`${open ? 'opacity-50': 'opacity-0'} fixed inset-0 bg-black pointer-events-none transition-opacity duration-300 z-40 md:hidden`}
    onClick={() => setOpen(false)}
    >

    </div>
    </>
  )
}

export function Toggler() {
  return (
    <button id="open-menu" className="p-4 md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
  )
}
