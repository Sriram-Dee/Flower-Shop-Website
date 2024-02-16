import { Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

const carouselDetails=[
      {
        image:"carouse1.jpg",
        title: "Lavender Love",
        description:  "It is a flower that consectetur adipisicing elit. Nobis a cum eum consequuntur maiores fuga",
        active: "active",
      },
      {
        image:"carouse2.jpg",
        title: "Spotted Lilly ",
        description:  "Flower that  maiores fuga consectetur adipisicing elit. Nobis a cum eum consequuntur",
        active: false,
      },
      {
        image:"carouse3.jpg",
        title: "Pink Rose",
        description:  "A flower which shows the love. Nobis a hum eum consequuntur maiores fuga",
        active: false,
      },
  ]
function HeroCarousel() {
  return (
    <>
    
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {
            carouselDetails.map((caro, index) => (
              <div className={"carousel-item "+ caro.active } key={index} data-bs-interval="2000">
                <img src={caro.image} className="d-block w-100" alt={caro.image} />
                <div className="carousel-caption d-sm-block">
                  <h3 className="h1">{caro.title}</h3>
                  <p className="lead">{caro.description}</p>
                  <Button variant="info" className="text-light mt-1 mt-md-5 btn-sm"><Cart/> Order Now</Button>
                </div>
              </div>
            ))
          }
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
    </>
  );
}

export default HeroCarousel;