import AboutMe from "./components/about-me/AboutMe"
import Contact from "./components/contact-me/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Project1 from "./components/projects/Project1"
import Services from "./components/services/Services"

export default function App() {
  return (
    <div data-theme="corporate">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Project1 />
      <Contact />
      <Footer />
    </div>
  )
}