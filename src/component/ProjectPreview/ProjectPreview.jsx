import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

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
        <Animated animationIn="bounce" animationOut="fadeOut" isVisible={true}>
          <button>INFO</button>
        </Animated>
        </Link>
      </section>
    </main>
  );
};

export default ProjectPreview;
