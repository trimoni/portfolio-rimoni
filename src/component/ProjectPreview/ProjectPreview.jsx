import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title);
  return (
      <section>
      <div>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <Link to={path}>
        <Animated >
          <button animationIn="bounce" animationOut="fadeOut" isVisible={true}>INFO</button>
        </Animated>
        </Link>
        </div>
      </section>
    
  );
};

export default ProjectPreview;
