import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/MercedesA.jpg";
import img2 from "../assets/MercedesB.jpg";
import img3 from "../assets/MercedesD.jpg";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Classe A</h3>
          <p>Scopri tutte le nostre vetture in pronta consegna</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Coupè</h3>
          <p>Scopri tutte le nostre vetture in pronta consegna</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Berline</h3>
          <p>Scopri tutte le nostre vetture in pronta consegna</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
