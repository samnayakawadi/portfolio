import AboutMe from "./components/about-me/AboutMe"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"

export default function App() {
  return (
    <div data-theme="lofi">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Footer />
    </div>
  )
}