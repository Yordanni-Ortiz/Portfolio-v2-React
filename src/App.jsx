import './assets/styles/App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FormEmails from './components/FormEmails'
import CarouselProjects from './components/CarouselProjects'

function App() {

  return (
    <div id='Home' className="App">
      <NavBar/>
      <Main/>
      <Skills/>
      <Projects/>
      <CarouselProjects/>
      <FormEmails/>
      <Footer/>
    </div>   
  )
}

export default App
