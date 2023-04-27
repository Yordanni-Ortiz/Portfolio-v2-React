import '../assets/styles/Main.css';
import { saveAs } from 'file-saver';

function Main() {

    function downloadCV() {
        const url = '/pdf/CV-Yordanni-Ortiz.pdf';
        const fileName = 'CV-Yordanni-Ortiz.pdf';
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.blob();
            })
            .then(blob => {
                saveAs(blob, fileName);
                const fileUrl = URL.createObjectURL(blob);
                window.open(fileUrl, '_blank');
            })
            .catch(error => {
                console.error('Error al descargar el archivo:', error);
            });
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
                Soy un desarrollador web entusiasta y apasionado con la tecnología. 
                Me encanta explorar nuevas herramientas y crear productos innovadores 
                y de alta calidad. Me emociona estar al tanto de las últimas tendencias 
                y avances en el mundo de la tecnología y aplicarlos en mi trabajo diario. 
                Estoy constantemente buscando nuevos desafíos para crecer y mejorar mis 
                habilidades como desarrollador.
                </p>
            </div>
            <button className='button gradient' onClick={downloadCV}>Descargar CV</button>
        </article>
    </div>
  )
}

export default Main