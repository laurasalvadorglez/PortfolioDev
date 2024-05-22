import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/meab.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Systems Administrator</h3>
              <p>
                Graduated in Computer Systems Administration.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graph.png")} alt="Chart icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
                Experience cleaning, storing, and analyzing data to create
                dashboards.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Automation Developer</h3>
              <p>
                Analysis of routine processes to create flows that automate
                them.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
/*<li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>Salir, beber, los rollos de siempre tarararrara</p>
            </div>
          </li>*/
