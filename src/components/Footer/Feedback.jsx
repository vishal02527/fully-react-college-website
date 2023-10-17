import React, { useState } from "react";
import styles from "./Feedback.module.css";

function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [facility, setFacility] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmitFeedback = () => {
    if (name && email && phone && role && facility && experience) {
      // All required fields are filled
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className={styles.feedbackContainer}>
        <h1 className={styles.feedHeading}>Share Your Feedback</h1>
        {submitted ? (
          <div className={styles.submittedMessage}>
            Thank you for giving your valuable feedback!
          </div>
        ) : (
          <div className={styles.formContainer}>
            <h1 className={styles.title}>College Survey Form</h1>
            <p className={styles.description}>
              Thank you for taking the time to help us improve the platform
            </p>
            <form className={styles.surveyForm}>
              <div class={styles.formGroup}>
                <label className={styles.nameLabel} for="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.controlForm}
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class={styles.formGroup}>
                <label class={styles.emailLabel} for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.controlForm}
                  placeholder="Enter your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class={styles.formGroup}>
                <label class={styles.numberLabel} for="number">
                  Phone number
                </label>
                <input
                  type="text"
                  id="number"
                  name="phone number"
                  className={styles.controlForm}
                  placeholder="Phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class={styles.formGroup}>
                <span class={styles.sel}>
                  Which option best describes your current role?
                </span>
                <select
                  id="dropdown"
                  name="role"
                  className={styles.controlForm}
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option disabled selected value>
                    select current role
                  </option>
                  <option>Student</option>
                  <option>Instructor</option>
                  <option>Developer</option>
                  <option>Prefer not to say</option>
                  <option>Other</option>
                </select>
              </div>
              <div class={styles.formGroup} style={{ marginBottom: "30px" }}>
                <p className={styles.para1}>
                  Would you recommend our college to your friend?
                </p>
                <input
                  type="radio"
                  id="Definitely"
                  name="recommend"
                  className={styles.inputRadio}
                  checked
                />
                <label for="Definitely" className={styles.radioLabel}>
                  Definitely
                </label>
                <br />
                <input
                  type="radio"
                  id="maybe"
                  name="recommend"
                  className={styles.inputRadio}
                />
                <label for="maybe" className={styles.radioLabel}>
                  Maybe
                </label>
                <br />
                <input
                  type="radio"
                  id="notsure"
                  name="recommend"
                  className={styles.inputRadio}
                />
                <label for="notsure" className={styles.radioLabel}>
                  Not sure
                </label>
              </div>
              <div class={styles.formGroup}>
                <span className={styles.sel}>Facilities</span>
                <select
                  id="dropdown"
                  name="facilities"
                  className={styles.controlForm}
                  required
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                >
                  <option disabled selected value>
                    Select an option
                  </option>
                  <option>Excellent</option>
                  <option>Very good</option>
                  <option>Good</option>
                  <option>Fair enough</option>
                  <option>Poor</option>
                </select>
              </div>
              <div class={styles.formGroup}>
                <span className={styles.sel}>Overall experience</span>
                <select
                  id="dropdown"
                  name="overallExperience"
                  className={styles.controlForm}
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option disabled selected value>
                    Select an option
                  </option>
                  <option>Excellent</option>
                  <option>Very good</option>
                  <option>Good</option>
                  <option>Fair enough</option>
                  <option>Poor</option>
                </select>
              </div>
              <div class={styles.formGroup}>
                <p className={styles.para2}>
                  What would you like to see improved?
                  <span className={styles.clue}>(Check all that apply)</span>
                </p>
                <input
                  type="checkbox"
                  id="Library"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="Library" className={styles.checkboxLabel}>
                  College Library
                </label>
                <br />
                <input
                  type="checkbox"
                  id="Canteen"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="Canteen" className={styles.checkboxLabel}>
                  College Canteen
                </label>
                <br />
                <input
                  type="checkbox"
                  id="Sports"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="Sports" className={styles.checkboxLabel}>
                  Sports
                </label>
                <br />
                <input
                  type="checkbox"
                  id="OnlineServices"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="OnlineServices" className={styles.checkboxLabel}>
                  Online Services
                </label>
                <br />
                <input
                  type="checkbox"
                  id="HealthServices"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="HealthServices" className={styles.checkboxLabel}>
                  Health Services
                </label>
                <br />
                <input
                  type="checkbox"
                  id="ProjectAssignments"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label
                  for="ProjectAssignments"
                  className={styles.checkboxLabel}
                >
                  Projects and Assignments
                </label>
                <br />
                <input
                  type="checkbox"
                  id="TeachingInstructors"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label
                  for="TeachingInstructors"
                  className={styles.checkboxLabel}
                >
                  Teaching Instructors
                </label>
                <br />
                <input
                  type="checkbox"
                  id="ClassTiming"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="ClassTiming" className={styles.checkboxLabel}>
                  Class Timing
                </label>
                <br />
                <input
                  type="checkbox"
                  id="more"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="more" className={styles.checkboxLabel}>
                  More Academic Activities
                </label>
                <br />
                <input
                  type="checkbox"
                  id="classrooms"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="classrooms" className={styles.checkboxLabel}>
                  Classrooms
                </label>
                <br />
                <input
                  type="checkbox"
                  id="AdditionalCourses"
                  name="improve"
                  className={styles.inputCheckbox}
                />
                <label for="AdditionalCourses" className={styles.checkboxLabel}>
                  Additional Courses
                </label>
              </div>
              <div className={styles.text}>
                <span className={styles.commentText}>
                  Any additional comments or suggestions?
                </span>
                <span className={styles.clue}>(optional)</span>
                <textarea
                  className={styles.comment}
                  name="comment"
                  placeholder="Enter your comment here..."
                ></textarea>
              </div>
              <div class={styles.formGroup}>
                <button onClick={handleSubmitFeedback} className={styles.btn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Feedback;
