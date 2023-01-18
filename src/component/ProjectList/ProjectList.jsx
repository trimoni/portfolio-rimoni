import ProjectPreview from "../ProjectPreview/ProjectPreview";
import styles from './ProjectList.module.css'


const ProjectList = (props) => {
  return (
    <>
    <section className={styles.projectContainer}>
      {props.projects.map((project, i) =>
      <ProjectPreview title={project.title} key={i} image={project.image} description={project.description} repositoryLink={project.repositoryLink} depositoryLink={project.depositoryLink}/>
      )}
    </section>
    </>
  );
}

export default ProjectList