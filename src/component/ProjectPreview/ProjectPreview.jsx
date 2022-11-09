import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title);
  return (
    <main>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <section>
        <h3>{props.title}</h3>
        <Link to={path}>
          <button>Learn more</button>
        </Link>
      </section>
    </main>
  );
};

export default ProjectPreview;
