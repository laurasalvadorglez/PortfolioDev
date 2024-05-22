import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Laura</h1>
        <p className={styles.description}>
         Passionate about data and computing, with a strong drive to learn more about tech. 
         While my experience is limited, my enthusiasm and keenness to learn are boundless. 
         Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:laurasalvadorglez@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mehero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};