import Tal from "../assets/Tal.jpg";
import styles from "../styles/Home.module.css";
import AWS from '../assets/amazonaws.svg'
import Bootstrap from '../assets/bootstrap.svg'
import CSS from '../assets/css3.svg'
import Django from '../assets/django.svg'
import Express from '../assets/express.svg'
import Github from '../assets/github.svg'
import GoogleCloud from '../assets/googlecloud.svg'
import HTML from '../assets/html5.svg'
import Javascript from '../assets/javascript.svg'
import Azure from '../assets/microsoftazure.svg'
import Mongo from '../assets/mongodb.svg'
import Node from '../assets/nodedotjs.svg'
import SQL from '../assets/postgresql.svg'
import React from '../assets/react.svg'

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.align}>
        <h2>Tal Rimoni</h2>
        <h3>Aspiring Software Engineer!</h3>
      </div>
      <div className={styles.line}>
        <img src={Tal} alt="headshot of tal" />
        <p className={styles.paragraph}>
          I'm a graduate from General Assembly's Software Engineer Intensive
          program! I specialize in Front and Back end work, building websites
          and apps from scratch. I believe good communication and collaboration
          gets the job done!
        </p>
      </div>
      <div>
        <h3 className={styles.skills}>Skills</h3>
      </div>
    </main>
  );
};

export default Home;
