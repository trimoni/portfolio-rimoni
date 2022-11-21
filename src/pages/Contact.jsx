import styles from '../styles/Contact.module.css'
import { Button } from "bootstrap";

const Contact = () => {
  return (
    <div className={styles.container}>
    <div className={styles.contacttext}>
      <h2 className={styles.contact}>Let's connect!</h2>
      <h4 className={styles.contact}>Questions, greetings, burning confessions? Whatever you've got to say, I'd lvoe to hear from you.</h4>
    </div>
      <div>
      <label for="name">Name</label>
      <input id="name" name="name" placeholder="Your Name" type="text" required="required" class="form-control"/>
      </div>
      <div>
        <label for='email'>Email</label>
        <input id="email" name="email" placeholder="jane.doe@example.com" type="text" required="required" class="form-control"></input>
      </div>
      <div>
      <label for="textarea">Message</label> 
        <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-danger">Submit</button>
      </div>
      <div class="contact-links">
    <h4></h4>
    <a href="https://www.linkedin.com/in/beryl-baldwin/" target="_blank"><i class="devicon-linkedin-plain"></i></a>
    <a href="https://github.com/berylrb" target="_blank"><i class="devicon-github-original"></i></a>
  </div>
    </div>
  );
};

export default Contact;

{/* <main className={styles.container}>
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
    </main> */}