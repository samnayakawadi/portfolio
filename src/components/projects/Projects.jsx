import ProjectTemplate from "./template/ProjectTemplate"
import Project1JSON from "./jsons/Project1.json"
import Project2JSON from "./jsons/Project2.json"
import Project3JSON from "./jsons/Project3.json"

// eslint-disable-next-line react/prop-types
const Projects = ({ onHoverHandler }) => {

    const projects = [
        Project1JSON,
        Project2JSON,
        Project3JSON
    ]

    return (
        <div>
            {
                projects.map((singleProject, projectIndex) => {
                    return <ProjectTemplate key={projectIndex} onHoverHandler={onHoverHandler} {...singleProject} />
                })
            }
        </div>
    )
}

export default Projects