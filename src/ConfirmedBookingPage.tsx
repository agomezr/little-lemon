import { use, useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"

function ConfirmedBooking() {

  useEffect(()=>{
    document.title = "Little Lemon - Booking confirmed";
  },[]);

  return (
    <>
    <header>
        <Header/>
      </header>
      <main>

        <div className="px-3 py-8 min-h-[50vh]">
          <div className='container mx-auto border border-primary rounded'>
            <div className="flex flex-col items-center justify-center h-100">
              <h1 className="text-lg mb-4">Booking has been confirmed</h1>
              <p className="text-primary font-semibold text-lg">Thank you for booking with us!</p>
            </div>
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