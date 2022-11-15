import findProject from "../../utilities/findProject";
import { useLocation } from "react-router-dom";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = () => {
  const location = useLocation();
  const project = findProject(location.pathname);
  return (
    <body className={styles.container}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="connect four" />
      <br />
      <button className="btn btn-info">
        <a href={project.repositoryLink}>GitHub</a>
      </button>
      <button className="btn btn-light">
        <a href={project.depositoryLink}>Website</a>
      </button>
    </body>
  );
};

export default ProjectDetails;
