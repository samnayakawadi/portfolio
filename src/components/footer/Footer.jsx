/* eslint-disable react/prop-types */
import facebook from "./images/facebook.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import github from "./images/github.png"

const Footer = ({ currentHeight }) => {

    return (
        <div className={`flex flex-row max-lg:flex-wrap justify-center items-center ${currentHeight === 'hScreen' ? 'p-4' : 'p-10'} bg-footerbg max-lg:gap-10`}>
            <div className="basis-4/12 max-lg:basis-full text-center text-gray-400">
                samnayakawadi |
                {" "}
                <a href="http://gg.gg/samnayakawadi-resume" target="_blank" rel="noreferrer" className="hover:text-redColor">Download Resume</a>
            </div>
            <div className="basis-4/12 max-lg:basis-full">
                <div className="flex flex-row justify-center items-center gap-2">
                    <a href="https://facebook.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-4 text-gray-400" src={facebook} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://linkedin.com/in/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-4 text-gray-400" src={linkedin} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://github.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-6 text-gray-400" src={github} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://instagram.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-4 text-gray-400" src={instagram} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://twitter.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-redColor hover:border-redColor p-0">
                            <img className="w-4 text-gray-400" src={twitter} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                </div>
            </div>
            <div className="basis-4/12 text-gray-400 max-lg:basis-full text-center">
                Made with ❤️ | Original Code |
                {" "}
                <a href="https://github.com/samnayakawadi/portfolio" target="_blank" rel="noreferrer" className="hover:text-redColor">Checkout Github Repository</a>
            </div>
        </div>
    )
}

export default Footer