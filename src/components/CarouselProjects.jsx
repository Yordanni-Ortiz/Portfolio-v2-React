import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/CarouselProjects.css'
import { Carousel } from 'react-bootstrap';

function CarouselProjects() {

  const Ecommerce = "https://ecommerce-yordanni-ortiz.netlify.app/"
  const Pokedex = "https://pokedex-yordanni-ortiz.netlify.app/#/"
  const Crud = "https://crud-yordanni-ortiz.netlify.app/"

  return (
    <Carousel className='carouselContainer container slidesToShow={1} slidesToScroll={1}'
    prevIcon={<i className="fas fa-chevron-left"></i>}
    nextIcon={<i className="fas fa-chevron-right"></i>}>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="pokedexImage.png"
          alt="First slide"
        />
        <a className='anchor' href={Pokedex} target='blank'>
          <button className='button'>VER PROYECTO</button>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="ecommerceImage.png"
          alt="Second slide"
        />
        <a className='anchor' href={Ecommerce} target='blank'>
          <button className='button'>VER PROYECTO</button>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="crudImage.png"
          alt="Third slide"
        />
        <a className='anchor' href={Crud} target='blank'>
          <button className='button'>VER PROYECTO</button>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProjects;