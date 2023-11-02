import requirements from "./images/requirements.png"
import planning from "./images/planning.png"
import designing from "./images/designing.png"
import frontend from "./images/frontend.png"
import backend from "./images/backend.png"
import testing from "./images/testing.png"

// eslint-disable-next-line react/prop-types
const Services = ({ onHoverHandler }) => {
    return (
        <div id="service" className="bg-servicesbg text-white container-padding-x container-padding-y" onMouseOver={() => { onHoverHandler("service") }}>

            <div className="text-center px-20">
                <h1 className="text-7xl font-bold">My Awesome Service</h1>
                <h4 className="text-lg px-52 pt-5 text-gray-400">Providing tailored web solutions from in-depth requirement analysis to secure backend development, ensuring seamless functionality and design excellence.</h4>
            </div>

            <div className="grid grid-cols-3 gap-10 pt-20">
                <div className="p-10 bg-serviceTileBg rounded-lg py-14 hover:bg-serviceTileBgOnHover transition ease-linear delay-75 hover:scale-105 hover:cursor-pointer">
                    <img src={requirements} className="w-20" />
                    <h1 className="text-xl font-semibold pt-3">Requirement Analysis</h1>
                    <h3 className="text-lg pt-3">Gather client requirements, ensuring a deep understanding of needs. This phase lays the foundation for a tailored web solution aligned with client expectations.</h3>
                </div>
                <div className="p-10 bg-serviceTileBg rounded-lg py-14 hover:bg-serviceTileBgOnHover transition ease-in-out delay-75 hover:scale-105 hover:cursor-pointer">
                    <img src={planning} className="w-20" />
                    <h1 className="text-xl font-semibold pt-3">Planning Features</h1>
                    <h3 className="text-lg pt-3">Strategically plan features based on gathered requirements, aiming for a cohesive and functional web application that meets both user needs and project goals.</h3>
                </div>
                <div className="p-10 bg-serviceTileBg rounded-lg py-14 hover:bg-serviceTileBgOnHover transition ease-in-out delay-75 hover:scale-105 hover:cursor-pointer">
                    <img src={designing} className="w-20" />
                    <h1 className="text-xl font-semibold pt-3">Designing UI/UX</h1>
                    <h3 className="text-lg pt-3">Create an intuitive user interface using Figma or basic layouts. Prioritize user experience, employing design principles to shape a visually appealing and user-friendly web environment.</h3>
                </div>
                <div className="p-10 bg-serviceTileBg rounded-lg py-14 hover:bg-serviceTileBgOnHover transition ease-in-out delay-75 hover:scale-105 hover:cursor-pointer">
                    <img src={backend} className="w-20" />
                    <h1 className="text-xl font-semibold pt-3">Backend Development</h1>
                    <h3 className="text-lg pt-3">Develop secure APIs using NodeJS/ExpressJS and MongoDB for efficient data handling. Lay the groundwork for a robust server-side, ensuring scalability and reliability in the backend infrastructure.</h3>
                </div>
                <div className="p-10 bg-serviceTileBg rounded-lg py-14 hover:bg-serviceTileBgOnHover transition ease-in-out delay-75 hover:scale-105 hover:cursor-pointer">
                    <img src={frontend} className="w-20" />
                    <h1 className="text-xl font-semibold pt-3">Frontend Development</h1>
                    <h3 className="text-lg pt-3">Implement a dynamic UI with React and associated tools like Redux. Blend functionality seamlessly with design, creating an interactive and responsive user interface for an engaging web experience.</h3>
                </div>
                <div className="p-10 bg-serviceTileBg rounded-lg py-14 hover:bg-serviceTileBgOnHover transition ease-in-out delay-75 hover:scale-105 hover:cursor-pointer">
                    <img src={testing} className="w-20" />
                    <h1 className="text-xl font-semibold pt-3">Testing & Fixing</h1>
                    <h3 className="text-lg pt-3">Rigorously test the web application for functionality, security, and performance. Identify and address any issues promptly, ensuring a bug-free and polished final product before deployment.</h3>
                </div>
            </div>
        </div>
    )
}

export default Services
