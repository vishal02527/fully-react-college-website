import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from './AdmissionListNotices.module.css'

function AdmissionListNotices() {
  const { notice } = useParams();

  // Define content for each notice based on 'noticeName'
  let noticeContent = null;

  if (notice === "List of Students for FEE Submission (Certificate)") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          List of Students for FEE Submission (Certificate)
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice ===
    "Documents verification has started of candidates seeking admission in B.B.A"
  ) {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Documents verification has started of candidates seeking admission in
          B.B.A
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice ===
    "List of Post Graduate Candidates for Interviews (Distance Centre)"
  ) {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          List of Post Graduate Candidates for Interviews (Distance Centre)
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice ===
    "Couselling-cum-Admission schedule for M.Sc. (Chemistry) under SFS"
  ) {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Couselling-cum-Admission schedule for M.Sc. (Chemistry) under SFS
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (notice === "Rescheduling of B.E. Admission Interview") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Rescheduling of B.E. Admission Interview
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice === "Inviting interested candidates for admission in B.Com (Online)"
  ) {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Inviting interested candidates for admission in B.Com (Online)
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  }

  // If 'noticeContent' is null, it means the noticeName is not recognized
  if (!noticeContent) {
    return (
      <PageNotFound />
    );
  }

  return <div>{noticeContent}</div>;
}

export default AdmissionListNotices;
