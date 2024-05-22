import React from "react";

import styles from "./Education.module.css";
import languagesSP from "./../../data/languagesSP.json";
import cursosSp from "../../data/cursosSp.json";
import { getImageUrl } from "../../utils";

export const EducationSP = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Educación</h2>
      <div className={styles.content}>
        <div className={styles.languages}>
          {languagesSP.map((language, id) => {
            return (
              <div key={id} className={styles.language}>
                <div className={styles.languageImageContainer}>
                  <img
                    src={getImageUrl(language.imageSrc)}
                    alt={language.title}
                  />
                </div>
                <p>{language.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.cursos}>
          {cursosSp.map((cursosItem, id) => {
            return (
              <li key={id} className={styles.cursosItem}>
                <img
                  src={getImageUrl(cursosItem.imageSrc)}
                  alt={`${cursosItem.organization} Logo`}
                />
                <div className={styles.cursosItemDetails}>
                  <h3>
                    {cursosItem.role} 
                    {cursosItem.organization && ` - ${cursosItem.organization}`}
                  </h3>
                  <p>
                  {cursosItem.startDate && cursosItem.endDate ? 
                    `${cursosItem.startDate} - ${cursosItem.endDate}` :
                    cursosItem.startDate ? cursosItem.startDate :
                    cursosItem.endDate ? cursosItem.endDate :
                    ''}
                  </p>
                  <ul>
                  {cursosItem.experiences.map((education, id) => {
                    return <li key={id}>{education}</li>;
                  })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
