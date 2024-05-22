import React from "react";

import styles from "./Projects.module.css";

import projectsSP from "../../data/projectsSP.json";
import { ProjectCardSP } from "./ProjectCardSP";

export const ProjectsSP = () => {
  return (
    <section className={styles.container} id="projectsSP">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>
        {projectsSP.map((project, id) => {
          return <ProjectCardSP key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
