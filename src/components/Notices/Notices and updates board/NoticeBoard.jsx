import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoticeBoard.module.css";

const notices = [
  {
    id: 1,
    text: "Classes start on October 15th of UG-1st sem",
  },
  {
    id: 2,
    text: "Join us for the annual college festival on October 5th.",
  },
  {
    id: 3,
    text: "Library access is available from 8:00 AM to 6:00 PM on weekdays.",
  },
  {
    id: 4,
    text: "Notice for extension in last date Registration-cum-Examination (FYUP)",
  },
  {
    id: 5,
    text: "Notice regarding re-evaluation for various courses Examinations",
  },
  {
    id: 6,
    text: "Registratoin-cum-Examination Form",
  },
];

function NoticeBoard() {
  return (
    <>
      <div className={styles.noticeBoard}>
        <h2 className={styles.noticeheading}>Notices & updates</h2>
        <ul className={styles.noticeList}>
          {notices.map((notice) => (
            <Link to={`/notices-and-updates/${notice.text}`}>
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

export default NoticeBoard;
