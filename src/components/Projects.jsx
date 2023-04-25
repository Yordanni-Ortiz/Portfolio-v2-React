import '../assets/styles/Projects.css'

function Projects() {

  return (
    <div id='Projects' className="projects">
      <h2 className='projectsText'>Projects</h2>
      <article className='descriptions'>
        <div className='container'>
          <p className='titulo'>POKÉDEX</p>
          <p className='subtitulo'>
          Desarrollé una Pokédex con React y Redux esta aplicación permite a los 
          usuarios buscar y filtrar Pokémon por tipo, así como ver detalles sobre 
          cada uno, con una interfas que optima para mejorar la experiencia del 
          usuario. La aplicación está conectada a una API que proporciona información 
          detallada sobre los Pokémon.
          </p>
        </div>
        <div className='container'>
          <p className='titulo'>ECOMMERCE</p>
          <p className='subtitulo'>
          Este Ecommerce es una aplicación web que permite a los usuarios 
          registrados buscar productos y agregarlos a un carrito de compras. 
          El front-end stá desarrollado con React y Redux, y el back-end 
          está construido con Node.js y Express, y utiliza Sequelize como 
          ORM para interactuar con la base de datos.
          </p>
        </div>
        <div className='container'>
          <p className='titulo'>CRUD</p>
          <p className='subtitulo'>
          En esta aplicación de React desarrollé una función CRUD que permite crear, leer, 
          actualizar y eliminar productos para una tienda en línea. La aplicación puede 
          conectarse a una base de datos o a una API que permita realizar estas operaciones 
          en los datos almacenados.
          </p>
        </div>
        <img className='lightTwo' src="/Gradient.png" alt="" />
      </article>
    </div>
  )
}

export default Projects
