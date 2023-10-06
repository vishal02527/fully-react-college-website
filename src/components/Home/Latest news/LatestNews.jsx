import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from './LatestNews.module.css'

function LatestNews() {
  const { newsName } = useParams();

  // Define content for each news article based on 'newsName'
  let newsContent = null;

  if (newsName === "online-noc") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Online NOC and Affiliation System</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (newsName === "registrar-notice") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Registrar Notice-International Day of Non-Violence</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (newsName === "recruitment-advertisement") {
    newsContent = (
      <div clasclassName={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Recruitment Advertisement-Guest Faculty 2023-24</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  }

  // If 'newsContent' is null, it means the newsName is not recognized
  if (!newsContent) {
    return (
      <PageNotFound />
    );
  }

  return <div>{newsContent}</div>;
}

export default LatestNews;
