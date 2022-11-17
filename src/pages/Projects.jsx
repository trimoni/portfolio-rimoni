import { projects } from '../data/projects.js'
import ProjectList from '../component/ProjectList/ProjectList.jsx';

const Projects = () => {
  return (
    <main>
      <ProjectList projects={projects}/>
    </main>
  );
}

export default Projects;