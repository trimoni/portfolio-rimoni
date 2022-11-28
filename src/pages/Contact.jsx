import styles from "../styles/Contact.module.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contacttext}>
        <h2 className={styles.contact}>Let's connect!</h2>
        <h4 className={styles.contact}>
          Questions, greetings, burning confessions? Whatever you've got to say,
          I'd love to hear from you.
        </h4>
      </div>
      <div className={styles.contactwrapper}>
        <form>
          <div className={styles.formgroup}>
            <div>
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Your Name"
                type="text"
                required="required"
                class="form-control"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane.doe@example.com"
                type="text"
                required="required"
                class="form-control"
              ></input>
            </div>
            <div>
              <label for="textarea">Message</label>
              <textarea
                id="textarea"
                name="textarea"
                cols="40"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
            <div className={styles.button}>
              <button name="submit" type="submit" className="btn btn-danger">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.contactlinks}>
        <div>
          <a href="https://github.com/trimoni">
            <img src={github} alt="" className={styles.image} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/talrimoni/">
            <img src={linkedin} alt="" className={styles.image} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <main className={styles.container}>
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
    </main> */
}
