import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const AboutSP = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mi</h2>
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
              <h3>Administrador de sistemas</h3>
              <p>
                Graduada en Administración de Sistemas informáticos.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graph.png")} alt="Graph icon" />
            <div className={styles.aboutItemText}>
              <h3>Ingeniero de datos</h3>
              <p>
              Experiencia en limpieza, almacenamiento y análisis de datos para crear cuadros de mando.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Automatizaciones</h3>
              <p>
              Análisis de procesos rutinarios para crear flujos que los automaticen.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
