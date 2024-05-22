import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:laurasalvadorglez@gmail.com">
            laurasalvadorglez@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedIn icon"
          />
          <a href="https://linkedin.com/in/laurasalvadorgonzalez" target="_blank">
            linkedin.com/in/laurasalvadorgonzalez
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/laurasalvadorglez" target="_blank">github.com/laurasalvadorglez</a>
        </li>
      </ul>
    </footer>
  );
};
