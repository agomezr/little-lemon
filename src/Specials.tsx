import greekSaladImg from "./assets/greek salad.jpg";
import bruchettaImg from "./assets/bruchetta.svg";
import lemonDessertImg from "./assets/lemon dessert.jpg";
import bicycleImg from "/bicycle.svg";


type SpecialProps = {
  name: string,
  description: string,
  image: string,
  price: string,
}

function Specials() {

  const special1:SpecialProps = {
    'name':'Greek Salad', 
    'description': "The famous greek salad of crispy lettuce, peppers, olives and our Chicago", 
    'image':greekSaladImg, 
    'price': '12.40€'
  }
  const special2:SpecialProps = {
    'name':'Brucheta', 
    'description': "The famous bruchetta of crispy lettuce, peppers, olives and our Chicago", 
    'image':bruchettaImg, 
    'price': '5.20€'
  }
  const special3:SpecialProps = {
    'name':'Lemon dessert', 
    'description': "Lemon dessert Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", 
    'image':lemonDessertImg, 
    'price': '6.30€'
  }


  return (
    <>

      <div id="specials" >

        <Special {...special1}/>
        <Special {...special2}/>
        <Special {...special3}/>
        <Special {...special3}/>

      </div>
    </>
  );
}


function Special({name, description, image, price}:SpecialProps) {
  return (
  <div className="card">
    <div className="card-img">
      <img src={image} alt={name} loading="lazy"/>
    </div>
    <div className="card-body">
      <div className="card-title flex flex-row align-center justify-between">
        <p className="h3">{name}</p>
        <p className="price">{price}</p>
      </div>
      <p className="card-description">
        {description}
      </p>
      <div className="card-footer">
        <a href="#" className="link-delivery" title={`Order a delivery for ${name}`}>
          Order a delivery
          <img src={bicycleImg} aria-hidden="true" title="Order a delivery" className="h-4 w-4" loading="lazy"/>
        </a>
      </div>
    </div>
  </div>
  );
}

export default Specials;
