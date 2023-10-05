import React from "react";
import styles from "./404Page.module.css";

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.content}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.description}>
          Oops! The page you are looking for might have been removed or is
          temporarily unavailable.
        </p>
        <a href="/" className={styles.link}>
          Go back to the home page
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
