import Testimonial from "./Testimonial";
import avatar from "./assets/avatar1.jpg";
import avatar2 from "./assets/avatar2.jpg";
import avatar3 from "./assets/avatar3.jpg";
import avatar4 from "./assets/avatar4.jpg";
import type { TestimonialProps } from "./Testimonial";



function Testimonials() {
  const testimonial:TestimonialProps = {
    'name':'John Doe', 
    'image':avatar, 
    'description': "well", 
    'rating': 3
  }
  const testimonial2:TestimonialProps = {
    'name':'Maria', 
    'image':avatar2, 
    'description': "not good", 
    'rating': 1
  }
  const testimonial3:TestimonialProps = {
    'name':'Cintya Kile', 
    'image':avatar3, 
    'description': "Almost very good", 
    'rating': 4
  }
  const testimonial4:TestimonialProps = {
    'name':'Karla Smith', 
    'image':avatar4, 
    'description': "Excellent! the Brucheta and the lemon dessert were delicious.", 
    'rating': 5
  }
  
  return (
    <>
      <h1 className="text-center mb-4">Testimonials</h1>

      <div id="testimonials"  
      // className="md:flex md:flex-row md:g-2 md:flex-wrap max-w-3xl mx-auto p-3"
      className="container md:flex md:flex-row md:flex-wrap mx-auto p-3"
      >
        <div className="md:w-1/2 lg:w-1/4 p-2">
          <Testimonial {...testimonial} />
        </div>
        <div className="md:w-1/2 lg:w-1/4 p-2">
          <Testimonial {...testimonial2} />
        </div>
        <div className="md:w-1/2 lg:w-1/4 p-2">
          <Testimonial {...testimonial3} />
        </div>
        <div className="md:w-1/2 lg:w-1/4 p-2">
          <Testimonial {...testimonial4} />
        </div>
        
      </div>
    </>
  )
}

export default Testimonials