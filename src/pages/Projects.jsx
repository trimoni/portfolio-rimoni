import { projects } from '../data/projects.js'
import ProjectList from '../component/ProjectList/ProjectList.jsx';
import styles from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <main className={styles.container}>
      <ProjectList projects={projects}/>
    </main>
  );
}

export default Projects;