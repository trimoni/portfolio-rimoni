// import styles from '/styles/Resume.module.css'


const Resume = () => {
  return (
    <main>
      <embed 
        type="application/pdf"
        src="./resume.pdf"
        height="500%"
        width="100%"
        />
          <div className="buttonDiv">
        <a className="btn btn-dark" href={require('./resume.pdf')} download="Tal Rimoni's Resume">Download Resume</a>
      </div>
    </main>
  );
}

export default Resume;
