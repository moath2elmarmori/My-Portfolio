import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Skills.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
  }, [inView, animation]);
  return (
    <section
      className={`${styles["skills-section"]} pt-150 pb-100 border-bottom-with-before`}
      id="skills"
      ref={ref}
    >
      <motion.div
        className={`${styles["top-section"]}`}
        initial={{ x: "-100vw" }}
        animate={animation}
      >
        <div className={`${styles["left-section"]}`}>
          <h1 className={`${styles.heading}`}>
            MY <span className="color-secondary">SKILLS</span>
          </h1>
          <p>Learned the MERN stack and can do production ready apps with it</p>
        </div>
        <div className={`${styles["right-section"]}`}>
          <div className={`${styles["image-div"]}`}>
            <Image
              src={
                "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670398681/jbrish/skills-image_klopwz.png"
              }
              alt={"A photo of a team working together"}
              width={530}
              height={200}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className={`${styles["bottom-section"]}`}
        initial={{ x: "100vw" }}
        animate={animation}
      >
        <div className={`${styles["box"]}`}>
          <div className={`${styles["top-box"]}`}>
            <h1>01</h1>
            <h2>Front-End</h2>
            <div className={`${styles["box-color"]}`}></div>
          </div>
          <div>
            <p>
              i&apos;m not going to write HTML, CSS etc.. thing, it&apos;s
              written enough accross Portfolios, but you should know that
              i&apos;ve worked with{" "}
              <span className="highlited">VanillaJS + React</span> EcoSystem and
              the Lovely <span className="highlited-2">(NextJS)</span> enough to
              make a good UI & UX designs, and i've built a game with{" "}
              <span className="highlited-3">VueJS</span> and refactored some old
              vue code for some old projects
            </p>
          </div>
        </div>
        <div className={`${styles["box"]}`}>
          <div className={`${styles["top-box"]}`}>
            <h1>02</h1>
            <h2>Back-End</h2>
            <div className={`${styles["box-color"]}`}></div>
          </div>
          <div>
            <p>
              <span>
                Handling the server side of things, have built APIs with{" "}
                <span className="highlited">NodeJS & Express</span>-{" "}
                <span className="highlited-2">PHP & Laravel</span>
                and used the SQL and NoSQL DBs like{" "}
                <span className="highlited-3">MongoDB, MySQL & PostgreSQL</span>
              </span>
            </p>
          </div>
        </div>
        <div className={`${styles["box"]}`}>
          <div className={`${styles["top-box"]}`}>
            <h1>03</h1>
            <h2>Mobile</h2>
            <div className={`${styles["box-color"]}`}></div>
          </div>
          <div>
            <p>
              After sometime with web dev i've decided to go to something new
              and challenging, so i've studdied Mobile dev, and my web dev
              background have saved me a lot,{" "}
              <span className="highlited">React Native</span> was a good
              transition because of React background, but{" "}
              <span className="highlited-2">Flutter</span> was very fun for me
              and it took my heart quickly
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
