import ProjectPreview from "../ProjectPreview/ProjectPreview";


const ProjectList = (props) => {
  return (
    <main>
    <div>
      {props.projects.map((project, i) =>
      <ProjectPreview title={project.title} key={i} image={project.image}/>
      )}
    </div>
    </main>
  );
}

export default ProjectList