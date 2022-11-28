import Tal from '../assets/Tal.jpg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <main className={styles.container}>
      <h2>Software Engineer</h2>
    <img src={Tal} alt="headshot of tal" />
      <p>I'm a graduate from General Assembly's Software Engineer Intensive program! I specialize in Front and Back end work, building websites and apps from scratch. I believe good communication and collaboration gets the job done!</p>
    </main>
  );
}

export default Home;

