import { projects } from "../../data/projects";
import findProject from "../../utilities/findProject";
import { useLocation } from "react-router-dom";


const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  return (
    <>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <img src={project.image} alt="connect four" />
    <br />
    <button><a href={project.repositoryLink}>GitHub</a></button>
    <button>Website</button>
    </>
  );
}

export default ProjectDetails;