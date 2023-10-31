import Selector from "./selector/Selector"
import samnayakawadiCdac from "./images/samnayakawadi-cdac.png"

const AboutMe = () => {
    return (
        <div className="bg-aboutbg text-white container-padding-x container-padding-y">
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="basis-5/12">
                    {/* <img src="https://trydo.rainbowit.net/assets/images/about/about-8.jpg" /> */}
                    <img src={samnayakawadiCdac} />
                </div>
                <div className="basis-7/12">
                    <h1 className="text-7xl font-bold">About Me</h1>
                    <p className="text-xl pt-5 text-gray-400 pr-20">Dedicated Full Stack Web Developer driven by a passion for transforming ideas into dynamic, user-centric solutions. My expertise spans the entire development process, from front-end aesthetics to back-end functionality. A relentless learner, I stay at the forefront of tech trends, ensuring every project showcases innovation and a commitment to excellence. Explore my portfolio for a glimpse into the seamless synergy of creativity and code.</p>
                    <div className="pt-5">
                        <Selector />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe