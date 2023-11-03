import ProjectTemplate from "./template/ProjectTemplate"
import Project1JSON from "./jsons/Project1.json"
import Project2JSON from "./jsons/Project2.json"

const Projects = ({ onHoverHandler }) => {

    const projects = [
        Project1JSON,
        Project2JSON
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