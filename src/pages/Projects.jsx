import { projects } from '../data/projects.js'
import ProjectList from '../component/ProjectList/ProjectList.jsx';

const Projects = () => {
  return (
    <>
    <ProjectList projects={projects}/>
    </>
  );
}

export default Projects;