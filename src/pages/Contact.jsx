import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <main className={styles.container}>
      <h1>Please Contact Me!</h1>
      <div>
        <a className="btn btn-danger btn-lg" href="https://github.com/trimoni">Github</a>
      </div>
      <div>
        <a
          className="btn btn-warning btn-lg"
          href="mailto:trimoni8@gmail.com"
          target="_blank"
          rel="noreferrer"
          alt="Tal Rimoni email"
        >
          Email
        </a>
      </div>
      <div>
        <a className="btn btn-success btn-lg" href="https://www.linkedin.com/in/talrimoni/">LinkedIn</a>
      </div>
    </main>
  );
};

export default Contact;
