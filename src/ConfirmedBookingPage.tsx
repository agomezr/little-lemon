import Footer from "./Footer"
import Header from "./Header"

function ConfirmedBooking() {
  return (
    <>
    <header>
        <Header/>
      </header>
      <main>

        <div className="px-3 py-8 min-h-[50vh] bg-custom">
          <div className='container mx-auto'>
            <h1 className="text-center">Booking has been confirmed</h1>
            
          </div>
        </div>
        

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default ConfirmedBooking