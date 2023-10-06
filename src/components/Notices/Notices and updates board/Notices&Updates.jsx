import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";

function NoticesAndUpdates() {
  const { notice } = useParams();

  // Define content for each notice based on 'noticeName'
  let noticeContent = null;

  if (notice === "Classes start on October 15th of UG-1st sem") {
    noticeContent = (
      <div style={{height: '50vh'}}>
        <h2 style={{ color: "red" }}>
          Classes start on October 15th of UG-1st sem
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice === "Join us for the annual college festival on October 5th."
  ) {
    noticeContent = (
      <div style={{height: '50vh'}}>
        <h2 style={{ color: "red" }}>
          Join us for the annual college festival on October 5th.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice ===
    "Library access is available from 8:00 AM to 6:00 PM on weekdays."
  ) {
    noticeContent = (
      <div style={{height: '50vh'}}>
        <h2 style={{ color: "red" }}>
          Library access is available from 8:00 AM to 6:00 PM on weekdays
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice ===
    "Notice for extension in last date Registration-cum-Examination (FYUP)"
  ) {
    noticeContent = (
      <div style={{height: '50vh'}}>
        <h2 style={{ color: "red" }}>
          Notice for extension in last date Registration-cum-Examination (FYUP)
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (
    notice === "Notice regarding re-evaluation for various courses Examinations"
  ) {
    noticeContent = (
      <div style={{height: '50vh'}}>
        <h2 style={{ color: "red" }}>
          Notice regarding re-evaluation for various courses Examinations
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum accumsan mi, non gravida lorem fringilla non.
        </p>
      </div>
    );
  } else if (notice === "Registratoin-cum-Examination Form") {
    noticeContent = (
      <div style={{height: '50vh'}}>
        <h2 style={{ color: "red" }}>Registratoin-cum-Examination Form</h2>
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

export default NoticesAndUpdates;
