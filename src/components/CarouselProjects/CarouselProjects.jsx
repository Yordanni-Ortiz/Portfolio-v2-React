import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CarouselProjects/CarouselProjects.css";
import { Carousel, Button } from "react-bootstrap";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function CarouselProjects() {
  const Ecommerce = "https://ecommerce-yordanni-ortiz.netlify.app/";
  const Pokedex = "https://pokedex-yordanni-ortiz.netlify.app/#/";
  const Crud = "https://crud-yordanni-ortiz.netlify.app/";
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Carousel
      className="carouselContainer container slidesToShow={1} slidesToScroll={1}"
      prevIcon={<i className="fas fa-chevron-left"></i>}
      nextIcon={<i className="fas fa-chevron-right"></i>}
      data-aos="fade-left"
    >
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="pokedexImage.png"
          alt="First slide"
        />
        <div className="button">
          <Button className="custom-button" variant="primary" type="submit" href={Pokedex} target="blank">
            {isEnglish ? "SEE PROJECT" : "VER PROYECTO"}
          </Button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="ecommerceImage.png"
          alt="Second slide"
        />
        <div className="button">
          <Button className="custom-button" variant="primary" type="submit" href={Ecommerce} target="blank">
           {isEnglish ? "SEE PROJECT" : "VER PROYECTO"} 
          </Button>
        </div>
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="crudImage.png"
          alt="Third slide"
        />
        <div className="button">
          <Button className="custom-button" variant="primary" type="submit" href={Crud} target="blank">
            {isEnglish ? "SEE PROJECT" : "VER PROYECTO"}
          </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProjects;
