import ProjectPreview from "../ProjectPreview/ProjectPreview";


const ProjectList = (props) => {
  return (
    <>
    <div>
      {props.projects.map((project, i) =>
      <ProjectPreview title={project.title} key={i} image={project.image}/>
      )}
    </div>
    </>
  );
}

export default ProjectList