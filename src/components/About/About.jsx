import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2>About Our College</h2>
      <p>
        Our college, founded in 19XX, is a renowned institution dedicated to
        providing high-quality education and fostering an environment of
        academic excellence. Located in the heart of the city, our college
        offers a wide range of undergraduate and postgraduate programs, catering
        to diverse fields of study.
      </p>

      <h3>Our Mission</h3>
      <p>
        At our college, our mission is to empower students with knowledge and
        skills that will enable them to excel in their chosen careers. We are
        committed to nurturing talent, promoting research and innovation, and
        instilling values of integrity and leadership in our students.
      </p>

      <h3>Our Faculty</h3>
      <p>
        We take pride in our dedicated and experienced faculty members who are
        experts in their respective fields. They are passionate about teaching
        and are committed to providing students with a rich learning experience.
        Our faculty members actively engage in research and contribute to the
        academic community.
      </p>

      <h3>Infrastructure</h3>
      <p>
        Our college campus boasts state-of-the-art facilities, including modern
        classrooms, well-equipped laboratories, a library with a vast collection
        of books, and sports facilities to promote physical fitness and
        wellness. We provide a conducive environment for both academic and
        extracurricular activities.
      </p>
    </div>
  );
}

export default About;
