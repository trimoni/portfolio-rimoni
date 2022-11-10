import styles from '../styles/Resume.module.css'
import resume from '../public/Resume.pdf'

const Resume = () => {
  return (
    <main className={styles.container}>
      <embed 
        type="application/pdf" 
        src={resume}
        height="90%"
        width="80%"
        />
          <div className="buttonDiv">
        <a className="btn btn-dark" href={require({resume})} download="Tal Rimoni's Resume">Download Resume</a>
      </div>
    </main>
  );
}

export default Resume;
