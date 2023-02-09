import styles from "../styles/Projects.module.css";
import SingleProject from "./SingleProject";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import projectsInfoArr from "../utils/projectsInfo";

function Projects() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
  }, [inView, animation]);
  return (
    <section
      className={`${styles["projects-section"]} pt-150 pb-100 border-bottom-with-before`}
      id="projects"
      ref={ref}
    >
      <h1 className={`${styles["heading"]}`}>
        <span className="color-secondary">Pro</span>jects
      </h1>
      <p>
        These are the projects that i have made, either it was a just a work of
        a frontend like the game projects etc, or a fullstack project containing
        the server side & the client side of things
      </p>
      <motion.div
        className={`${styles["projects-grid"]}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={animation}
      >
        {projectsInfoArr.map((projectInfo, index) => (
          <SingleProject
            key={index}
            imageSrc={projectInfo.imgSrc}
            imageAlt={projectInfo.imageAlt}
            projectTitle={projectInfo.projectTitle}
            projectLiveSite={projectInfo.projectLiveSite}
            projectGithubRepo={projectInfo.projectGithubRepo}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
