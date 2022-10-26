import { projects } from "../../data/projects";
import findProject from "../../utilities/findProject";
import { useLocation } from "react-router-dom";


const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  return (
    <>
    <h1>Colorful Connect Four</h1>
    <p>ColorFul Connect Four is basically Connect Four but Colorful</p>
    <img src={project.image} alt="connect four" />
    <br />
    <button><a href='https://github.com/trimoni/Connect-Four-Unit-1.git'>GitHub</a></button>
    <button>Website</button>
    </>
  );
}

export default ProjectDetails;