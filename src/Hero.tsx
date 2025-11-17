import heroImg from './assets/restauranfood.jpg'

function Hero() {
  return (
    <>
     <div id="hero" className='bg-primary py-4'>
          <div className='flex flex-col md:flex-row md:items-start md:justify-between max-w-2xl mx-auto p-3 md:px-7'>
            <div className='text-white md:px-5'>
              <h1 className='text-secondary'>Little Lemon</h1>
              <p className='h2'>Chicago</p>
              <p className='mr-7 mb-5'>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <button className='button'>Reserve a Table</button>
            </div>
            <div className='relative w-[440px] hidden md:block'>
              <p className='md:absolute md:top-12 left-0 w-[250px] aspect-square'>
                <img src={heroImg} alt="Waiter with a bruchetta mediterranean food" className='rounded ' />
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero