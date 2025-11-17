import Header from './Header.tsx'
import Footer from './Footer.tsx'

export default function ErrorPage() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>

        <div className='bg-primary text-white px-3 py-8 min-h-[50vh]'>
          <div className='flex items-center justify-center h-100'>
            <h1>Error Page</h1>
          </div>
        </div>
        

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
