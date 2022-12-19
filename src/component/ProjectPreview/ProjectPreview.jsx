import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import Card from 'react-bootstrap/Card'
import styles from './ProjectPreview.module.css'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title);
  return (
    <body>
      <Card className={styles.card}>
        <Card.Img variant='top' src={props.image} alt={props.title} className={styles.cardImg}/>
          <Card.Body>
            <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        {/* <Link to={path}>
          <Animated>
            <button
              animationIn="bounce"
              animationOut="fadeOut"
              isVisible={true}
              className={styles.button}
            >
              INFO
            </button>
          </Animated>
        </Link> */}
      
        </Card>
    </body>
  );
};

export default ProjectPreview;
