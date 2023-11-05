import Selector from "./selector/Selector"
// import samnayakawadiCdac from "./images/samnayakawadi-cdac.png"

// eslint-disable-next-line react/prop-types
const AboutMe = ({ onHoverHandler }) => {
    return (
        <div id="about" className="bg-aboutbg text-white container-padding-x container-padding-y scroll-margin-top" onMouseOver={() => { onHoverHandler("about") }}>

            {/* <div className="text-center px-20">
                <h1 className="text-7xl font-bold">About Me</h1>
                <h4 className="text-lg px-52 pt-5 text-gray-400">Dedicated Full Stack Web Developer driven by a passion for transforming ideas into dynamic, user-centric solutions. My expertise spans the entire development process, from front-end aesthetics to back-end functionality. A relentless learner, I stay at the forefront of tech trends, ensuring every project showcases innovation and a commitment to excellence. Explore my portfolio for a glimpse into the seamless synergy of creativity and code.</h4>
            </div> */}

            <div className="flex flex-row max-lg:flex-wrap justify-center items-center gap-10">
                <div className="max-lg:basis-full basis-5/12">
                    <div className="flex flex-row justify-center">
                        <img src="https://trydo.rainbowit.net/assets/images/about/about-8.jpg" />
                    </div>
                    {/* <img src={samnayakawadiCdac} /> */}
                </div>
                <div className="max-lg:basis-full basis-7/12">
                    {/* <h1 className="text-7xl font-bold">About Me</h1> */}
                    <p className="text-xl text-gray-400">Dedicated Full Stack Web Developer driven by a passion for transforming ideas into dynamic, user-centric solutions. My expertise spans the entire development process, from front-end aesthetics to back-end functionality. A relentless learner, I stay at the forefront of tech trends, ensuring every project showcases innovation and a commitment to excellence. Explore my portfolio for a glimpse into the seamless synergy of creativity and code.</p>
                    <div className="pt-5">
                        <Selector />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe