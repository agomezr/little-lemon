import Footer from "./Footer"
import Header from "./Header"
import ReservationForm from "./ReservationForm"

function BookingPage() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>

        <div className="px-3 py-8 min-h-[50vh] bg-custom">
          <div className='container mx-auto'>
            <h1 className="text-center">Reserve a table</h1>
            <p className="text-sm text-center mb-4">*All fields are required</p>
            <ReservationForm/>
          </div>
        </div>
        

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default BookingPage