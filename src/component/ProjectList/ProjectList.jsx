import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectList = (props) => {
  return (
    <>
    <h3>Projects</h3>
    <ul>
      {props.projects.map((project, i) =>
      <ProjectPreview title={project.title} key={i} image={project.image}/>
      )}
    </ul>
    </>
  );
}

export default ProjectList