import '../assets/styles/Main.css'

function Main() {

    function downloadCV() {
        const url = '/pdf/CV-Yordanni-Ortiz.pdf';
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV-Yordanni-Ortiz.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.open(url, '_blank');
      }

  return (
    <div className="main">
        <img className='centralImage' src="/Central-Image.png" alt="" />
        <article className='presentation'>
            <img id='AboutMe' src="/photoPerfil.png" alt="" />
            <div className='presentation1'>
                <h2 className='space greeting'>¡Hola!</h2>
                <h2 className='space'>soy</h2>
                <h1>Yordanni Ortiz</h1>
            </div>
            <div className='presentation2'>
                <h4>desarrollador web.</h4>
                <p>
                    Soy un apasionado programador con un gran deseo de seguir aprendiendo y creciendo 
                    en mi carrera. Me he dedicado con disciplia a perfeccionar mis habilidades y adquirir
                    conocimientos en una variedad de lenguajes de programación y tecnologías. Lo que
                    me hace una excelente opción para reforzar tu plantilla laboral.
                </p>
            </div>
            <button className='button gradient' onClick={downloadCV}>Descargar CV</button>
        </article>
    </div>
  )
}

export default Main