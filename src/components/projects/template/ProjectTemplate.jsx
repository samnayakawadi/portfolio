// eslint-disable-next-line react/prop-types
const ProjectTemplate = ({ onHoverHandler, id, data, colors, about, buttons, youtube }) => {


    // # DO NOT REMOVE THESE CLASSES. They are required to resolve Tailwinds Dynamic Classes Issue

    // bg-project1bg
    // bg-project2bg

    // bg-project1TileBg
    // bg-project2TileBg

    return (
        <div id={id} className={`bg-${colors.bgColor} text-white container-padding-x container-padding-y`} onMouseOver={() => { onHoverHandler(id) }}>
            <div className="flex flex-row max-sm:flex-wrap max-sm:text-center justify-center items-center gap-10">
                <div className="basis-6/12 max-sm:basis-full">
                    <h4 className="-tracking-tighter uppercase font-light text-lg pb-3 text-gray-400">{about.header}</h4>
                    <h1 className="text-7xl font-bold max-sm:text-5xl">{about.title}</h1>
                    <h4 className="text-lg pt-5 text-gray-400">{about.description}</h4>
                    <div className="flex flex-row max-sm:justify-center gap-5 pt-5">
                        {
                            buttons.map((singleButton, buttonIndex) => {
                                return (<a key={buttonIndex} href={singleButton.link} target="_blank" rel="noreferrer" className="text-white hover:text-redColor cursor-pointer pb-2 hover:border-b-2 hover:border-redColor">{singleButton.title}</a>)
                            })
                        }
                        {/* <a href="https://drive.google.com/drive/folders/1dkKvIFWXMQfRnzWnF2oLs9uTnFXx0jx9?usp=sharing" target="_blank" rel="noreferrer" className="text-white hover:text-redColor cursor-pointer pb-2 hover:border-b-2 hover:border-redColor">See Manuals</a>
                        <a href="https://meghsikshak.in/" target="_blank" rel="noreferrer" className="text-white hover:text-redColor cursor-pointer pb-2 hover:border-b-2 hover:border-redColor">Contact Sales</a> */}
                    </div>
                </div>
                <div className="basis-6/12 max-sm:basis-full">
                    <div className="pt-5">
                        <iframe className="w-full" width={youtube.width} height={youtube.height} src={youtube.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="grid grid-cols-1 gap-5">
                    {data.map((singleItem, itemIndex) => {
                        return (
                            <div key={itemIndex} className={`p-10 bg-${colors.tileBgColor} rounded-lg py-14 hover:bg-project1TileBgOnHover transition ease-linear delay-75 hover:scale-100 hover:cursor-pointer`}>
                                {/* <img src={singleItem.logo} className="w-20" /> */}
                                <h1 className="text-xl font-semibold">{singleItem.title}</h1>
                                <h3 className="text-lg pt-3">{singleItem.description}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate