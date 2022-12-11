import React from "react";
import styles from "../styles/Footer.module.css";
import SocialMediaDiv from "./SocialMediaDiv";

function Footer() {
  return (
    <footer className={`${styles["footer-section"]}`}>
      <div className={`${styles["left-section"]}`}>
        <SocialMediaDiv />
        <h2>Moath Elmarmori</h2>
      </div>
      <div className={`${styles["right-section"]}`}>
        <p>&copy; 2022 Elmarmori, All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
