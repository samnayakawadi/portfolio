/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Main from "./components/routes/Main"
import { Route, Routes, useLocation } from "react-router"
import Links from "./components/routes/Links"

export default function App() {

  const defaultLocation = "home"
  const [currentLocation, setCurrentLocation] = useState(defaultLocation)

  const onHoverHandler = (newLocation) => {
    setCurrentLocation(newLocation)
  }

  const location = useLocation()

  const [currentRoute, setCurrentRoute] = useState(null)

  useEffect(() => {
    if (location.pathname === "/links") {
      setCurrentRoute("links")
    }
    else {
      setCurrentRoute("home")
    }
  })

  if (currentRoute) {
    return (
      <div data-theme="business" className={`cursor-crosshair flex flex-col ${currentRoute === 'links' ? 'h-screen' : 'h-full'}`}>
        <Navbar currentLocation={currentLocation} />
        <Routes>
          <Route path="/" element={<Main onHoverHandler={onHoverHandler} />} />
          <Route path="/links" element={<Links onHoverHandler={onHoverHandler} />} />
        </Routes>
        <Footer onHoverHandler={onHoverHandler} />
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }


}