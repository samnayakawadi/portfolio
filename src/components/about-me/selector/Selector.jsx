import { useState } from "react"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

const Selector = () => {

    const defaultSelector = "skills"

    const [currentSelector, setCurrentSelector] = useState(defaultSelector)

    const onSelectHandler = (newSelector) => {
        setCurrentSelector(newSelector)
    }

    return (
        <div>
            <div className="flex flex-row gap-10 text-lg font-bold">
                <span className={`hover:cursor-pointer ${currentSelector === "skills" && "text-redColor"}`}>
                    <button className={`pb-2 border-b-2 border-solid ${currentSelector === "skills" && "border-redColor"}`} onClick={() => { onSelectHandler("skills") }}>Skills</button>
                </span>
                {/* <span className={`hover:cursor-pointer ${currentSelector === "awards" && "text-redColor"}`}>
                    <button className={`pb-2 border-b-2 border-solid ${currentSelector === "awards" && "border-redColor"}`} onClick={() => { onSelectHandler("awards") }}>Awards</button>
                </span> */}
                <span className={`hover:cursor-pointer ${currentSelector === "experience" && "text-redColor"}`}>
                    <button className={`pb-2 border-b-2 border-solid ${currentSelector === "experience" && "border-redColor"}`} onClick={() => { onSelectHandler("experience") }}>Experience</button>
                </span>
                <span className={`hover:cursor-pointer ${currentSelector === "education" && "text-redColor"}`}>
                    <button className={`pb-2 border-b-2 border-solid ${currentSelector === "education" && "border-redColor"}`} onClick={() => { onSelectHandler("education") }}>Education</button>
                </span>
            </div>
            <div className="pt-5">
                {currentSelector === "skills" && <Skills />}
                {currentSelector === "experience" && <Experience />}
                {currentSelector === "education" && <Education />}
            </div>
        </div>
    )
}

export default Selector