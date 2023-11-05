import { useState } from "react"
import AboutMe from "./components/about-me/AboutMe"
import Contact from "./components/contact-me/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Services from "./components/services/Services"

export default function App() {

  const defaultLocation = "home"
  const [currentLocation, setCurrentLocation] = useState(defaultLocation)

  const onHoverHandler = (newLocation) => {
    setCurrentLocation(newLocation)
  }

  return (
    <div data-theme="corporate" className="cursor-crosshair">
      {/* <div className="p-10 bg-white text-black hidden max-sm:block">
        <h1>MAX-SM</h1>
      </div> */}
      <Navbar currentLocation={currentLocation} />
      <Hero onHoverHandler={onHoverHandler} />
      <AboutMe onHoverHandler={onHoverHandler} />
      <Services onHoverHandler={onHoverHandler} />
      <Projects onHoverHandler={onHoverHandler} />
      <Contact onHoverHandler={onHoverHandler} />
      <Footer onHoverHandler={onHoverHandler} />
    </div>
  )
}