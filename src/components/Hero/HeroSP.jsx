import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const HeroSP = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Laura</h1>
        <p className={styles.description}>
        Apasionada por los datos y la informática, con gran motivación para aprender más sobre tecnología. 
        Aunque mi experiencia es limitada, mi entusiasmo y ganas de aprender son ilimitados. 
        ¡Contáctame para saber más!
        </p>
        <a
          href="mailto:laurasalvadorglez@gmail.com"
          className={styles.contactBtn}
        >
          Contáctame
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
