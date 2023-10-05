import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdmissionList.module.css";

const notices = [
  {
    id: 1,
    text: "List of Students for FEE Submission (Certificate)",
  },
  {
    id: 2,
    text: "Documents verification has started of candidates seeking admission in B.B.A",
  },
  {
    id: 3,
    text: "List of Post Graduate Candidates for Interviews (Distance Centre)",
  },
  {
    id: 4,
    text: "Couselling-cum-Admission schedule for M.Sc. (Chemistry) under SFS",
  },
  {
    id: 5,
    text: "Rescheduling of B.E. Admission Interview",
  },
  {
    id: 6,
    text: "Inviting interested candidates for admission in B.Com (Online)",
  },
];

function AdmissionNoticeBoard() {
  return (
    <>
      <div className={styles.noticeBoard}>
        <h2 className={styles.noticeheading}>Admission list</h2>
        <ul className={styles.noticeList}>
          {notices.map((notice) => (
            <Link to={`/admission-list/${notice.text}`}>
              <li key={notice.id} className={styles.noticeItem}>
                {notice.text}
                <span className={styles.badge}>
                  <img
                    src="http://results.amucontrollerexams.com/result/cons/test.gif"
                    alt="Smiley face"
                    height="20"
                    width="35"
                  />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AdmissionNoticeBoard;
