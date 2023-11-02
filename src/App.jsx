import { useState } from "react"
import AboutMe from "./components/about-me/AboutMe"
import Contact from "./components/contact-me/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Project1 from "./components/projects/Project1"
import Services from "./components/services/Services"

export default function App() {

  const defaultLocation = "home"
  const [currentLocation, setCurrentLocation] = useState(defaultLocation)

  const onHoverHandler = (newLocation) => {
    setCurrentLocation(newLocation)
  }

  return (
    <div data-theme="corporate">
      <Navbar currentLocation={currentLocation} />
      <Hero onHoverHandler={onHoverHandler} />
      <AboutMe onHoverHandler={onHoverHandler} />
      <Services onHoverHandler={onHoverHandler} />
      <Project1 onHoverHandler={onHoverHandler} />
      <Contact onHoverHandler={onHoverHandler} />
      <Footer onHoverHandler={onHoverHandler} />
    </div>
  )
}