/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Main from "./components/routes/Main"
import { Route, Routes, useLocation } from "react-router"
import Resources from "./components/routes/Resources"
import NotFoundPage from "./components/routes/404.jsx"

export default function App() {

  const defaultLocation = "home"
  const [currentLocation, setCurrentLocation] = useState(defaultLocation)

  const onHoverHandler = (newLocation) => {
    setCurrentLocation(newLocation)
  }

  const location = useLocation()

  const [currentHeight, setCurrentHeight] = useState(null)

  useEffect(() => {
    if (location.pathname === "/home") {
      setCurrentHeight("hFull")
    }
    else {
      setCurrentHeight("hScreen")
    }
  })

  if (currentHeight) {
    return (
      <div data-theme="business" className={`cursor-crosshair flex flex-col ${currentHeight === 'hFull' ? 'h-full' : 'h-screen'}`}>
        <Navbar currentLocation={currentLocation} />
        <Routes>
          <Route path="/" element={<Main onHoverHandler={onHoverHandler} />} />
          <Route path="/resources" element={<Resources onHoverHandler={onHoverHandler} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer onHoverHandler={onHoverHandler} currentHeight={currentHeight} />
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }


}