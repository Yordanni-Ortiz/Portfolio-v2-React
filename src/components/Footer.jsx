import '../assets/styles/Footer.css'
import linkedin from '../../public/linkedin.png'
import whatsapp from '../../public/whatsapp.png'
import gmail from '../../public/gmail.png'
import instagram from '../../public/instagram.png'

function Footer() {

  const wts = "https://api.whatsapp.com/send/?phone=584126351466&text=Hola%2C+%C2%A1Mucho+gusto%21%0AGracias+por+escribir.%0A%C2%BFEn+qu%C3%A9+puedo+ayudarte%3F&type=phone_number&app_absent=0"
  const mail = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=yordannimod@gmail.com"
  const linkedIn = "https://www.linkedin.com/in/yordanni-ortiz/"
  const instaGram = "https://www.instagram.com/yordanni.ortiz/"
  const JavaScript = "https://certificates.academlo.com/en/verify/62771454024266"
  const React = "https://certificates.academlo.com/en/verify/92594742451940"
  const Node = "https://certificates.academlo.com/en/verify/79750527406367"
  const FullStack = "https://certificates.academlo.com/en/verify/35820114254797"
  const Academlo = "https://www.academlo.com/"


  return (
    <div className="footer">
      <article className='block one'>
        <div className='thanks'>
          <p className='thanks certifications'>Certifications</p>
          <a href={JavaScript} target='blank'>Fundamentos de JavaScript, CSS y HTML</a>
          <br />
          <a href={React} target='blank'>Diseño Web con React</a>
          <br />
          <a href={Node} target='blank'>Diseño Back-End con Node.js</a>
          <br />
          <a href={FullStack} target='blank'>Desarrollador Web Full-Stack</a>
          <br />
          <a href={Academlo} className='academlo' target='blank'>By Academlo</a>
        </div>
      </article>
      <article className='block two'>
        <p className='thanks'>
          ¡Gracias por visitar mi sitio web, espero poder trabajar pronto contigo!
        </p>
        <div className='thanks'>
          Si deseas contactarme, puedes hacerlo a través de mi correo 
          electrónico <a href={mail} target='blank'>yordannimod@gmail.com</a> y 
          también puedes seguirme en <a href={linkedIn} target='blank'>LinkedIn</a> para 
          mantenerte informado sobre mis últimas actualizaciones y proyectos.
        </div>
        <div className='year'>© 2023 - all rights reserved</div>
      </article>
      <article className='block three'>
        <p className='thanks'>Socials</p>
        <div>
          <a href={linkedIn} target='blank'><img src={linkedin} alt="" /></a>
          <a href={wts} target='blank'><img src={whatsapp} alt="" /></a>
        </div>
        <div>
            <a href={mail} target='blank'><img src={gmail} alt="" /></a>
            <a href={instaGram} target='blank'><img src={instagram} alt="" /></a>
        </div>
      </article>

    </div>
  )
}

export default Footer
