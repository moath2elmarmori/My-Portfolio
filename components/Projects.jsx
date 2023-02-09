import styles from "../styles/Projects.module.css";
import SingleProject from "./SingleProject";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670593154/jbrish/screencapture-calculator-app-moath-netlify-app-2022-12-09-15_12_27_1_jupb3g.png"
          }
          imageAlt="Calculator App"
          projectTitle="Calculator App"
          projectLiveSite="https://calculator-app-moath.netlify.app/"
          projectGithubRepo="https://github.com/moath2elmarmori/Calculator-App"
        />
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670597595/jbrish/screencapture-moath-yelpcamp-onrender-campgrounds-63871d4d1ca266fde58f3ad8-2022-12-09-16_51_38_gtheba.png"
          }
          imageAlt="YelpCamp"
          projectTitle="YelpCamp"
          projectLiveSite="https://moath-yelpcamp.onrender.com/"
          projectGithubRepo="https://github.com/moath2elmarmori/yelpCamp"
        />
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1675934459/jbrish/Screenshot_1_vmveuo.png"
          }
          imageAlt="Entertainment Web App"
          projectTitle="Entertainment Web App"
          projectLiveSite="https://entertainment-web-app-moath.vercel.app/"
          projectGithubRepo="https://github.com/moath2elmarmori/Entertainment-web-app"
        />

        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670592641/jbrish/screencapture-ip-address-tracker-moath-netlify-app-2022-12-09-15_29_57_uustbg.png"
          }
          imageAlt="IP Address Tracker"
          projectTitle="IP Address Tracker"
          projectLiveSite="https://ip-address-tracker-moath.netlify.app/"
          projectGithubRepo="https://github.com/moath2elmarmori/IP-Address-Tracker"
        />
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670594939/jbrish/screencapture-galleria-show-vercel-app-2022-12-09-16_07_35_mtk9m5.png"
          }
          imageAlt="Galleria Show Site"
          projectTitle="Galleria Show Site"
          projectLiveSite="https://galleria-show.vercel.app/"
          projectGithubRepo="https://github.com/moath2elmarmori/galleria-show-site"
        />
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670593685/jbrish/screencapture-memory-game-moath-netlify-app-2022-12-09-15_46_26_snenoj.png"
          }
          imageAlt="Memory Game"
          projectTitle="Memory Game"
          projectLiveSite="https://memory-game-moath.netlify.app/"
          projectGithubRepo="https://github.com/moath2elmarmori/Memory-Game"
        />
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670595273/jbrish/screencapture-project-mgmt-moath-onrender-2022-12-09-16_13_49_qeykik.png"
          }
          imageAlt="Project Managment Application"
          projectTitle="Project Managment Application"
          projectLiveSite="https://project-mgmt-moath.onrender.com/"
          projectGithubRepo="https://github.com/moath2elmarmori/MERN-GraphQl-Project-Mgmt"
        />

        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670596469/jbrish/screencapture-moath-ticketing-system-onrender-products-637dd21d71d505ae57d14a05-tickets-638b247ce9cb7936e744e2c4-2022-12-09-16_30_01_e3ihhk.png"
          }
          imageAlt="Ticketing System"
          projectTitle="Ticketing System"
          projectLiveSite="https://moath-ticketing-system.onrender.com/"
          projectGithubRepo="https://github.com/moath2elmarmori/Ticketing-System-Project"
        />
        {/* <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670596707/jbrish/screencapture-tic-tac-toe-moath-netlify-app-2022-12-09-16_37_04_bywlga.png"
          }
          imageAlt="TIC TAC TOE"
          projectTitle="TIC TAC TOE"
          projectLiveSite="https://tic-tac-toe-moath.netlify.app/"
          projectGithubRepo="https://github.com/moath2elmarmori/TIC-TAC-TOE"
        /> */}
        <SingleProject
          imageSrc={
            "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670597084/jbrish/screencapture-goalsetter-moath-onrender-2022-12-09-16_43_36_gjl74y.png"
          }
          imageAlt="MERN GoalSetter"
          projectTitle="MERN GoalSetter"
          projectLiveSite="https://goalsetter-moath.onrender.com/"
          projectGithubRepo="https://github.com/moath2elmarmori/MERN-GOALS-APP"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
