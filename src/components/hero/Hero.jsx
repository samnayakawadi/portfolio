import { useEffect, useState } from "react"
import samnayakawadi from "./images/samnayakawadi.png"

const Hero = () => {

    const defaultData = [
        "Fullstack Developer",
        "Mongo DB",
        "Express JS",
        "React JS",
        "Node JS",
    ]

    const [data, setData] = useState(defaultData[0])

    useEffect(() => {
        let index = 1
        const interval = setInterval(() => {

            if (index === defaultData.length) {
                index = 0
            }

            setData(defaultData[index])
            index++

        }, 2000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-row justify-center items-center bg-herobg">
            <div className="basis-5/12 p-32">
                <div className="avatar flex flex-row justify-center">
                    <div className="w-80 rounded-full ring ring-white ring-offset-base-100 ring-offset-8">
                        <img src="https://trydo.rainbowit.net/assets/images/about/designer-avatar.png" />
                        {/* <img src={samnayakawadi} /> */}
                    </div>
                </div>
            </div>
            <div className="basis-7/12 text-white">
                <h4 className="-tracking-tighter uppercase font-light text-lg pb-3 text-gray-400">Welcome To My World</h4>
                <h1 className="text-5xl font-bold pb-3">Hi, I{"'"}m Samir Nayakawadi</h1>
                <h1 className="text-6xl font-bold text-red-500 pb-6">{data}</h1>
                <h1 className="text-5xl font-bold pb-3">Based in Bharat.</h1>
            </div>
        </div>
    )
}

export default Hero