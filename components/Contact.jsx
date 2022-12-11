import Image from "next/image";
import styles from "../styles/Contact.module.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AiFillExclamationCircle } from "react-icons/ai";
import { toast } from "react-toastify";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const emailIsValid = !(
    !formValues.email ||
    !formValues.email.includes("@") ||
    !formValues.email.includes(".")
  );

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

  const inputOnChangeHandler = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputOnBlurHandler = (e) => {
    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const parsedResponse = await response.json();
    setIsLoading(false);
    // toast the response to the client
    toast(parsedResponse.message, {
      className: "my-toast",
    });
    // reset all the form values and set touched to false
    setFormValues((prevState) => ({
      name: "",
      email: "",
      message: "",
    }));
    setTouched((prevState) => ({
      name: false,
      email: false,
      message: false,
    }));
  };
  return (
    <section
      className={`${styles["contact-section"]} pt-150 pb-100`}
      id="contact"
      ref={ref}
    >
      <h1 className={`${styles["heading"]}`}>
        Contact{" "}
        <span
          className="color-secondary"
          title="short for Moath Elmarmori, again😅"
        >
          ME
        </span>
      </h1>
      <div className={`${styles["contact-section-content"]}`}>
        <motion.div
          className={`${styles["image-div"]}`}
          initial={{ x: "-100vw" }}
          animate={animation}
        >
          <Image
            src={
              "https://res.cloudinary.com/dk5awi1mn/image/upload/v1670398682/jbrish/contact-image_mntilv.jpg"
            }
            alt={
              "Someone staring at their monitor pretending that he's working"
            }
            width={"450"}
            height={"350"}
          />
        </motion.div>
        <motion.div
          className={`${styles["form-div"]}`}
          initial={{ x: "100vw" }}
          animate={animation}
        >
          <form onSubmit={formSubmitHandler}>
            <div
              className={`${styles["input-div"]} ${
                touched.name && !formValues.name ? styles["required"] : ""
              }`}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={inputOnChangeHandler}
                onBlur={inputOnBlurHandler}
              />
              <div className={`${styles["icon-div"]}`}>
                <AiFillExclamationCircle />
              </div>
            </div>
            <div
              className={`${styles["input-div"]} ${
                touched.email && !emailIsValid ? styles["required"] : ""
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={inputOnChangeHandler}
                onBlur={inputOnBlurHandler}
              />
              <div className={`${styles["icon-div"]}`}>
                <AiFillExclamationCircle />
              </div>
            </div>
            <div
              className={`${styles["textarea-div"]} ${
                touched.message && !formValues.message ? styles["required"] : ""
              }`}
            >
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                value={formValues.message}
                onChange={inputOnChangeHandler}
                onBlur={inputOnBlurHandler}
              ></textarea>
              <div className={`${styles["icon-div"]}`}>
                <AiFillExclamationCircle />
              </div>
            </div>
            <div className={`${styles["button-div"]}`}>
              <button
                disabled={
                  !formValues.name || !emailIsValid || !formValues.message
                }
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
