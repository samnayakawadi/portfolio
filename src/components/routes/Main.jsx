import AboutMe from "../about-me/AboutMe"
import Contact from "../contact-me/Contact"
import Hero from "../hero/Hero"
import Projects from "../projects/Projects"
import Services from "../services/Services"

// eslint-disable-next-line react/prop-types
const Main = ({ onHoverHandler }) => {
    return (
        <div>
            <Hero onHoverHandler={onHoverHandler} />
            <AboutMe onHoverHandler={onHoverHandler} />
            <Services onHoverHandler={onHoverHandler} />
            <Projects onHoverHandler={onHoverHandler} />
            <Contact onHoverHandler={onHoverHandler} />
        </div>
    )
}

export default Main