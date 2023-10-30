import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

export default function App() {
  return (
    <div data-theme="lofi">
      <Navbar />
      <Hero/>
      <Footer/>
    </div>
  )
}