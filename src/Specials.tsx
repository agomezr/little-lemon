import greekSaladImg from "./assets/greek salad.jpg";
import bruchettaImg from "./assets/bruchetta.svg";
import lemonDessertImg from "./assets/lemon dessert.jpg";
import bicycleImg from "/bicycle.svg";

function Specials() {

  return (
    <>

      <div id="specials" >

        <div className="card">
          <div className="card-img">
            <img src={greekSaladImg} alt="Greeek salad image" loading="lazy" />
          </div>
          <div className="card-body">
            <div className="card-title flex flex-row align-center justify-between">
              <p className="h3">Greek Salad</p>
              <p className="price">12.40€</p>
            </div>
            <p className="card-description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago
            </p>
            <div className="card-footer">
              <a href="#" className="link-delivery" title="Order a delivery for Greek Salad">
                Order a delivery 
                <img src={bicycleImg} aria-hidden="true" title="Order a delivery" className="h-4 w-4" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={bruchettaImg} alt="Brucheta image" loading="lazy"/>
          </div>
          <div className="card-body">
            <div className="card-title flex flex-row align-center justify-between">
              <p className="h3">Brucheta</p>
              <p className="price">5.20€</p>
            </div>
            <p className="card-description">
              The famous bruchetta of crispy lettuce, peppers, olives and our
              Chicago
            </p>
            <div className="card-footer">
              <a href="#" className="link-delivery" title="Order a delivery for Greek Salad">
                Order a delivery
                <img src={bicycleImg} aria-hidden="true" title="Order a delivery" className="h-4 w-4" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={lemonDessertImg} alt="Lemon dessert image" loading="lazy"/>
          </div>
          <div className="card-body">
            <div className="card-title flex flex-row align-center justify-between">
              <p className="h3">Lemon dessert</p>
              <p className="price">6.30€</p>
            </div>
            <p className="card-description">
              Lemon dessert Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="card-footer">
              <a href="#" className="link-delivery" title="Order a delivery for Lemon Dessert">
                Order a delivery
                <img src={bicycleImg} aria-hidden="true" title="Order a delivery" className="h-4 w-4" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={lemonDessertImg} alt="Lemon dessert image" loading="lazy"/>
          </div>
          <div className="card-body">
            <div className="card-title flex flex-row align-center justify-between">
              <p className="h3">Lemon dessert</p>
              <p className="price">6.30€</p>
            </div>
            <p className="card-description">
              Lemon dessert Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="card-footer">
              <a href="#" className="link-delivery" title="Order a delivery for Lemon Dessert">
                Order a delivery
                <img src={bicycleImg} aria-hidden="true" title="Order a delivery" className="h-4 w-4" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Specials;
