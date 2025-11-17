import Offcanvas from "./Offcanvas"

function Navigation() {
  return (
    <>
      <ul id="main-menu" className="hidden md:flex flex-row align-items-center justify-content-end gap-4">
        <li>
          <a href="#" title="Home">Home</a>
        </li>
        <li>
          <a href="#about-us" title="About">About</a>
        </li>
        <li>
          <a href="#" title="Menu">Menu</a>
        </li>
        <li>
          <a href="#" title="Reservations">Reservations</a>
        </li>
        <li>
          <a href="#" title="Order online">Order online</a>
        </li>
        <li>
          <a href="#" title="Login">Login</a>
        </li>
      </ul>
      <Offcanvas/>
    </>
  )
}

export default Navigation