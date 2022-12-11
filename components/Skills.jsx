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
              i&apos;ve worked with VanillaJS + React (and it&apos;s lovely
              third party packages) enough to make a good UI & UX designs
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
              currently working with NodeJS & Express & MongoDB for the server
              side of web dev, but i don&apos;t have any tiny tiny problem
              learning other technologies if needed
            </p>
          </div>
        </div>
        <div className={`${styles["box"]}`}>
          <div className={`${styles["top-box"]}`}>
            <h1>03</h1>
            <h2>Full-Stack</h2>
            <div className={`${styles["box-color"]}`}></div>
          </div>
          <div>
            <p>
              Can compine the &quot;clientSide&quot; + &quot;serverSide&quot;
              easily with each other, either with REST APIs or Graphql APIs
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
