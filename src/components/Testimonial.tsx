
export type TestimonialProps = {
  name: string,
  description: string,
  image: string,
  rating: number
}


function Testimonial({name, description, image, rating}:TestimonialProps) {
  return (
    <div className="testimonial bg-white rounded p-2">
      <div className="testimonial-header">
        <div className="flex flex-row items-center justify-start mb-2">
          <img src={image} alt="Profile picture" className="w-[60px] h-[60px] rounded-4xl"/>
          <div className="ml-3">
            <p>{name}</p>
            <Rating rating={rating}/>
          </div>
        </div>
      </div>
      <div className="testimonial-body">
        <p>{description}</p>
      </div>
    </div>
  )
}

function Rating({rating}: {rating:number}){
  
  return (
    <>
      <div className={`stars stars-${rating}`}> 
      </div>
    </>
  );
}

export default Testimonial