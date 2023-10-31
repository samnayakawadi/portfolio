import facebook from "./images/facebook.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"

const Footer = () => {

    return (
        <div className="flex flex-row justify-center items-center p-10 bg-footerbg">
            <div className="basis-4/12 text-center text-gray-400">
                samnayakawadi
            </div>
            <div className="basis-4/12">
                <div className="flex flex-row justify-center items-center gap-2">
                    <a href="https://facebook.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-red-600 hover:border-red-600 p-0">
                            <img className="w-4 text-gray-400" src={facebook} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://linkedin.com/in/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-red-600 hover:border-red-600 p-0">
                            <img className="w-4 text-gray-400" src={linkedin} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://instagram.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-red-600 hover:border-red-600 p-0">
                            <img className="w-4 text-gray-400" src={instagram} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                    <a href="https://twitter.com/samnayakawadi" target="_blank" rel="noreferrer">
                        <button className="btn btn-circle border-2 bg-footerbg border-white hover:bg-red-600 hover:border-red-600 p-0">
                            <img className="w-4 text-gray-400" src={twitter} /> {/* https://www.svgrepo.com/svg/512120/facebook-176?edit=true */}
                        </button>
                    </a>
                </div>
            </div>
            <div className="basis-4/12 text-gray-400">
                Made with ❤️ | Original Code |
                {" "}
                <a href="https://github.com/samnayakawadi/portfolio" target="_blank" rel="noreferrer" className="hover:text-red-400">Checkout Github Repository</a>
            </div>
        </div>
    )
}

export default Footer