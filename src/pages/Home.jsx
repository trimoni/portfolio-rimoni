import Tal from '../assets/Tal.jpg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.align}>
        <h2>Tal Rimoni</h2>
        <h3>Aspiring Software Engineer!</h3>
      </div>
    <img src={Tal} alt="headshot of tal" />
      <p className={styles.paragraph}>I'm a graduate from General Assembly's Software Engineer Intensive program! I specialize in Front and Back end work, building websites and apps from scratch. I believe good communication and collaboration gets the job done!</p>
    </main>
  );
}

export default Home;

