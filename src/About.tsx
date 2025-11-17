import photo1 from './assets/Mario and Adrian A.jpg';
import photo2 from './assets/Mario and Adrian b.jpg';


export default function About() {
  return (
    <section id="about-us" className='p-3 md:py-[150px]'>
      <article>
        <div className="container mx-auto md:flex md:flex-row md:items-center md-justify-between">
          <div className="md:w-1/12"></div>
          <div className="md:w-5/12">
            <div className='md:mr-7 p-3'>
              <h1>Little Lemon</h1>
              <p className='h2'>Chicago</p>
              <p className='mb-3'>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className='p-3 relative'>
              <div className='md:absolute md:-top-7 md:-right-6'>
                <img src={photo2} alt="Mario and Adrian A" className="w-[380px] mx-auto h-full object-cover relative rounded" loading="lazy"/>
              </div>
              <div className='md:absolute md:-bottom-7 md:-left-6 hidden md:block'>
                <img src={photo1} alt="Mario and Adrian b" className="w-[380px] h-full object-cover relative rounded" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="md:w-1/12 "></div>
        </div>
      </article>
    </section>
  )
}
