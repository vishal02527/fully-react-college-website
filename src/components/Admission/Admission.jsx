import React, { useState } from "react";
import styles from "./Admission.module.css";

function Admission() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "Male",
    email: "",
    phoneNumber: "",
    highestEducation: "",
    address: "",
    selectedCourse: "Computer Science",
    admissionYear: new Date().getFullYear(),
    uploadDocument: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [studentId, setStudentId] = useState(""); // State for unique student ID
  const [showDialog, setShowDialog] = useState(false); // State for showing dialog box

  const generateUniqueStudentId = (firstName, lastName) => {
    // To generate a unique student ID for e.g. first 2 characters of student's first name and last name with some random digits.
    return `${firstName.slice(0, 2)}${lastName.slice(0, 2)}${Math.floor(
      Math.random() * 10000
    )}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique student ID
    const uniqueStudentId = generateUniqueStudentId(
      formData.firstName,
      formData.lastName
    );

    // Store the unique student ID in local storage or on the server for future refrence like fee payment.
    localStorage.setItem(uniqueStudentId, JSON.stringify(formData));

    setStudentId(uniqueStudentId);

    console.log(formData);

    // Show the dialog box
    setShowDialog(true);

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "Male",
      email: "",
      phoneNumber: "",
      highestEducation: "",
      address: "",
      selectedCourse: "",
      admissionYear: new Date().getFullYear(),
      uploadDocument: "",
    });
  };

  return (
    <>
      <h2 style={{ color: "red", marginTop: "50px" }}>Admission Form</h2>
      <div className={styles.admissionForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Gender</label>
            <div className={styles.radioGroup}>
              <label style={{ fontWeight: "500" }}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label style={{ fontWeight: "500" }}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label style={{ fontWeight: "500" }}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="highesteducation">Highest education</label>
            <input
              type="text"
              id="highesteducation"
              name="highesteducation"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="selectedCourse">Select Course</label>
            <select
              id="selectedCourse"
              name="selectedCourse"
              value={formData.selectedCourse}
              onChange={handleChange}
              required
            >
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BE">BE</option>
              <option value="BTECH">BTECH</option>
              <option value="BCOM">BCOM</option>
              <option value="BSC(CS)">BSC(CS)</option>
              <option value="BSC(PCM)">BSC(PCM)</option>
              <option value="MSC(CS)">MSC(CS)</option>
              <option value="MSC(Math)">MSC(Math)</option>
              <option value="MSC(Chemistry)">MSC(Chemistry)</option>
              <option value="MSC(Physics)">MSC(Physics)</option>
              <option value="MCA">MCA</option>
              <option value="MCOM">MCOM</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="admissionYear">Admission Year</label>
            <input
              type="number"
              id="admissionYear"
              name="admissionYear"
              value={formData.admissionYear}
              onChange={handleChange}
              required
            />
          </div>
          {
            <div className={styles.formGroup}>
              <label htmlFor="document">Upload Marksheet</label>
              <input
                type="file"
                id="document"
                name="uploadMarksheet"
                onChange={handleChange}
                required
                style={{ marginLeft: "80px" }}
              />
            </div>
          }
          <div className={styles.chekboxdiv}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="check"
              required
            />
            <label className={styles.checkboxlavel} htmlFor="check">
              Agreed our terms and conditions.
            </label>
          </div>
          <div>
            <button className={styles.submitbtn}>Submit</button>
          </div>
        </form>
      </div>
      {/* Modal Dialog box */}
      {showDialog && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Admission form Submitted Successfully!</h3>
            <p className={styles.message}>
              Please copy or note your Unique Student ID for the future
              reference:
            </p>
            <p className={styles.studentId}>{studentId}</p>
            <button
              onClick={() => setShowDialog(false)}
              className={styles.dialogButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Admission;
