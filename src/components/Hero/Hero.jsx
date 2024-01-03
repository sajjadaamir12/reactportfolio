import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";



function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i am Ada</h1>
        <p className={styles.description}>
          I am full stack developer with 11 Years of Experience. Reach out if
          you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.heroImg}
        alt="hero-image-main"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
