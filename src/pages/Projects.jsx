import { projects } from '../data/projects.js'

const Projects = () => {
  return (
    <>
    <h3>Projects</h3>
    <ul>
      {projects.map((project) =>
      <li>{project.title}</li> 
      )}
    </ul>
    </>
  );
}

export default Projects;