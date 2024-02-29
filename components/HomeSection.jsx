import Link from "next/link";
import Image from "next/image";
import SocialMediaDiv from "./SocialMediaDiv";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function HomeSection() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
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
      id="home"
      className="home-section border-bottom-with-before"
      ref={ref}
    >
      <motion.div
        className="left-section"
        initial={{ opacity: 0, y: "100vh" }}
        animate={animation}
      >
        <h1>
          Moath <span className="elmarmori">Elmarmori</span>
        </h1>
        <p>Self Taught Developer,</p>
        <p className="additional-info">
          Passionate about computer science field and hoping to gain more
          knowledge about it.
        </p>
        <div className="buttons-div">
          <Link href="#contact">Contact Me</Link>
          <Link href="#projects">View Projects</Link>
        </div>
        <SocialMediaDiv />
      </motion.div>
      <motion.div
        className="right-section"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={animation}
      >
        <div className="image-div">
          <Image
            src="https://res.cloudinary.com/dk5awi1mn/image/upload/v1694732497/for-portfolio_a56sep.jpg"
            alt="A Photo Of Me"
            width={350}
            height={350}
          />
        </div>
      </motion.div>
    </section>
  );
}
