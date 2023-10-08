import React, { useState, useEffect } from "react";
import styles from "./Results.module.css";
import sign from "../../images/signature-png.png";
import clglogo from "../../images/logo.png";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Results() {
  const resultsData = [
    { id: "bca", title: "BCA Result" },
    { id: "bcom", title: "BCom Result" },
    { id: "msc(mathematic)", title: "MSc(Mathematic) Result" },
    { id: "bsc(cs)", title: "BSC(CS) Result" },
    { id: "bsc(pcm)", title: "BSC(PCM) Result" },
    { id: "msc(chemistry)", title: "MSc(Chemistry) Result" },
    { id: "mca", title: "MCA Result" },
    { id: "btech", title: "BTech Result" },
    { id: "msc(physics)", title: "MSc(Physics) Result" },
    { id: "mcom", title: "MCom Result" },
    { id: "be", title: "BE Result" },
    { id: "bba", title: "BBA Result" },
    { id: "msc(cs)", title: "MSc(CS) Result" },
  ];

  const [selectedResult, setSelectedResult] = useState(null);
  const [captchaCode, setCaptchaCode] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [studentResult, setStudentResult] = useState(null); // To store the student's result
  const [error, setError] = useState("");

  useEffect(() => {
    // Generate a random CAPTCHA code when the component mounts
    generateCaptcha();
  }, []);

  const handleResultClick = (resultId) => {
    setSelectedResult(resultId);
  };

  const generateCaptcha = () => {
    // Generate a random CAPTCHA code (you can customize this code as needed)
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    const captchaLength = 6; // Adjust the length as needed
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    setCaptchaCode(captcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered CAPTCHA matches the generated CAPTCHA
    if (enteredCaptcha === captchaCode) {
      // Check if the entered roll number exists in the available roll numbers
      if (availableRollNumbers.includes(rollNumber)) {
        // To retrieve the result based on the roll number
        const Response = fetchResultByRollNumber(rollNumber);

        if (Response) {
          // Display the result for the student
          setStudentResult(Response);
          setError("");
        }

        // Reset the form, including CAPTCHA
        setRollNumber("");
        setEnteredCaptcha("");
        generateCaptcha();
      } else {
        // Roll number not found, display an error message
        setStudentResult(null);
        setError("Roll number not found.");
      }
    } else {
      // CAPTCHA code entered incorrectly
      setError("Captcha not matched.");
    }

    if (
      enteredCaptcha !== captchaCode &&
      !availableRollNumbers.includes(rollNumber)
    ) {
      // If both roll number and captcha code are invalid
      setError("Either invalid roll number or captcha code.");
    }
  };

  const handleDownloadResult = () => {
    const resultSection = document.getElementById("resultSection"); // ID of the result section

    if (!resultSection) {
      console.error("Result section not found.");
      return;
    }

    // Use html2canvas to capture the result section as an image
    html2canvas(resultSection, { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Calculate the page size based on the result section's size
        const pageWidth = 210; // A4 page width in mm
        const pageHeight =
          (resultSection.clientHeight * pageWidth) / resultSection.clientWidth;
        const orientation = "p"; // Portrait

        // Create a new jsPDF instance
        const pdf = new jsPDF(orientation, "mm", "a4");

        // Add the captured image to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

        // Download the PDF with a unique filename (e.g., based on the student's name)
        pdf.save(`VDU_Result_${studentResult.name}.pdf`);
      }
    );
  };

  const handlePrintResult = () => {
    // Hide the header when printing
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    if (header) {
      header.classList.add(styles.header);
    }
    if (footer) {
      footer.classList.add(styles.footer);
    }

    // Add the "printOnly" class to elements you want to print
    const elementsToPrint = document.querySelectorAll(".studentResult");
    elementsToPrint.forEach((element) => {
      element.classList.add(styles.printOnly);
    });

    window.print();

    // Remove the "printOnly" class and reset the header visibility after printing
    elementsToPrint.forEach((element) => {
      element.classList.remove(styles.printOnly);
    });
    if (header) {
      header.classList.remove(styles.header);
    }
    if (footer) {
      footer.classList.remove(styles.footer);
    }
  };

  const availableRollNumbers = ["12345", "67890", "54321", "78199"]; // We can add more roll numbers as needed

  const studentResults = {
    12345: {
      rollNo: "12345",
      name: "KAVITA SEN",
      fatherName: "RAJENDRA SEN",
      photograph:
        "https://media.istockphoto.com/id/1438437093/photo/young-adult-woman-in-studio-shots-making-facial-expressions-and-using-fingers-and-hands.jpg?s=612x612&w=0&k=20&c=dLMqlllzmEyWRCTFNcQhsEyi4Xth6e5yJhcAel3PsXg=",
      dateOfBirth: "01/15/2002",
      instituteName: "D.S. COLLEGE, ALIGARH",
      enrollNo: "VDU4525",
      course: "BCA",
      semester: "1st Sem",
      subjects: [
        {
          coursecode: "VD031101T",
          papertitle: "Computer Fundamentals and MS-Office",
          obtainedmarks: 85,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD031102T",
          papertitle: "Introduction to Programming using C",
          obtainedmarks: 90,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD031103T",
          papertitle: "Business Communication and Soft Skill",
          obtainedmarks: 76,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD031104T",
          papertitle: "Introduction to HTMLCSS-XML",
          obtainedmarks: 79,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD031105T",
          papertitle: "Mathematics- I",
          obtainedmarks: 88,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD031106P",
          papertitle: "Practical",
          obtainedmarks: 92,
          totalmarks: 100,
          grade: "A",
        },
        {
          coursecode: "",
          papertitle: "",
          obtainedmarks: 510,
          totalmarks: 600,
          grade: "",
        },
      ],
      resultStatus: "PASS",
      resultDate: "15/10/2023",
    },
    67890: {
      rollNo: "67890",
      name: "RAHUL YADAV",
      fatherName: "SURESH YADAV",
      photograph:
        "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=",
      dateOfBirth: "01/15/2003",
      instituteName: "GOVERNMENT DEGREE COLLEGE, KHAIR, ALIGARH",
      enrollNo: "VDU9068",
      course: "BSC(CS)",
      semester: "5th Sem",
      subjects: [
        {
          coursecode: "VD060901T",
          papertitle: "Python programming",
          obtainedmarks: 75,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD060902T",
          papertitle: "Introduction to Software Engineering",
          obtainedmarks: 79,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD060903T",
          papertitle: "Mobile Application Development",
          obtainedmarks: 83,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD060904T",
          papertitle: "Personality Development Program",
          obtainedmarks: 70,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD060905T",
          papertitle: "Mini Project-I",
          obtainedmarks: 90,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD060906P",
          papertitle: "Practical",
          obtainedmarks: 94,
          totalmarks: 100,
          grade: "A",
        },
        {
          coursecode: "",
          papertitle: "",
          obtainedmarks: 491,
          totalmarks: 600,
          grade: "",
        },
      ],
      resultStatus: "PASS",
      resultDate: "03/10/2023",
    },
    54321: {
      rollNo: "54321",
      name: "ABHISHEK KUMAR",
      fatherName: "GOPAL KUMAR",
      photograph:
        "https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?s=612x612&w=0&k=20&c=qyj5Dh8_uN5Xue9aICOI0z_OYyzNh_f1pFeAhRA4FQA=",
      dateOfBirth: "19/04/2003",
      instituteName: "P.M. COLLEGE OF EDUCATION, KARSUA, ALIGARH",
      enrollNo: "VDU4210",
      course: "BTECH",
      semester: "2nd Sem",
      subjects: [
        {
          coursecode: "VD214701T",
          papertitle: "Engineering Physics",
          obtainedmarks: 76,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD214702T",
          papertitle: "Engineering Chemistry",
          obtainedmarks: 80,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD214703T",
          papertitle: "Application-based Programming in Python",
          obtainedmarks: 82,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD214704T",
          papertitle: "Probability and Statistics",
          obtainedmarks: 77,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD214705T",
          papertitle: "Mechanical Workshop",
          obtainedmarks: 65,
          totalmarks: 100,
          grade: "D",
        },
        {
          coursecode: "VD214706T",
          papertitle: "Human Value & Ethics",
          obtainedmarks: 90,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD214707P",
          papertitle: "Practical",
          obtainedmarks: 88,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "",
          papertitle: "",
          obtainedmarks: 558,
          totalmarks: 700,
          grade: "",
        },
      ],
      resultStatus: "PASS",
      resultDate: "15/10/2023",
    },
    78199: {
      rollNo: "781995",
      name: "PAYAL RATHOD",
      fatherName: "SWATANTRA RATHOD",
      photograph:
        "https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",
      dateOfBirth: "10/06/2004",
      instituteName: "GAGAN COLLEGE OF MANAGEMENT AND TECHNOLOGY,ALIGARH",
      enrollNo: "VDU3376",
      course: "MSC(Mathematics)",
      semester: "2nd Sem",
      subjects: [
        {
          coursecode: "VD605601T",
          papertitle: "Algebra – II",
          obtainedmarks: 86,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD605602T",
          papertitle: "Complex Analysis",
          obtainedmarks: 78,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD605603T",
          papertitle: "Topology – II",
          obtainedmarks: 90,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD605604T",
          papertitle: "Functional Analysis",
          obtainedmarks: 74,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD605605T",
          papertitle: "Partial Differential Equations",
          obtainedmarks: 80,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD605606T",
          papertitle: "Mathematical Modelling and Numerical Analysis – I",
          obtainedmarks: 95,
          totalmarks: 100,
          grade: "A",
        },
        {
          coursecode: "VD605607P",
          papertitle: "Practical",
          obtainedmarks: 88,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "",
          papertitle: "",
          obtainedmarks: 591,
          totalmarks: 700,
          grade: "",
        },
      ],
      resultStatus: "PASS",
      resultDate: "05/10/2023",
    },
  };

  const fetchResultByRollNumber = (rollNumber) => {
    if (availableRollNumbers.includes(rollNumber)) {
      return studentResults[rollNumber];
    } else {
      return null; // Roll number not found
    }
  };

  const handleRegenerateCaptcha = () => {
    generateCaptcha();
  };

  return (
    <>
      <div className={styles.resultpage}>
        <div className={styles.resultsList}>
          <h2 className={styles.resultheading}>Result Session 2023-24</h2>
          <ul>
            {resultsData.map((result) => (
              <li
                key={result.id}
                onClick={() => handleResultClick(result.id)}
                className={selectedResult === result.id ? styles.selected : ""}
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.resultForm}>
          <h2>Result</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="rollNumber">Roll Number:</label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="enteredCaptcha">Enter CAPTCHA:</label>
              <input
                type="text"
                id="enteredCaptcha"
                name="enteredCaptcha"
                value={enteredCaptcha}
                onChange={(e) => setEnteredCaptcha(e.target.value)}
                required
              />
            </div>

            <div className={styles.captchadiv}>
              <label htmlFor="generatedCaptcha">CAPTCHA Code:</label>
              <input
                type="text"
                id="generatedCaptcha"
                name="generatedCaptcha"
                value={captchaCode}
                className={styles.captcha}
                readOnly
                required
              />
            </div>
            <div className={styles.regeneratecaptcha}>
              <button
                type="button"
                onClick={handleRegenerateCaptcha}
                className={styles.regeneratecaptchabtn}
              >
                Regenerate CAPTCHA
              </button>
            </div>

            <button type="submit" className={styles.getresultbtn}>
              Get Result
            </button>
          </form>
        </div>
      </div>
      {/* Display the student's result or error */}
      {studentResult !== null ? (
        <section>
          <div id="resultSection" className={styles.studentResult}>
            <div className={styles.resultHeader}>
              <img
                src={clglogo}
                className={styles.resultHeaderLogo}
                alt="universityLogo"
              />
              <div className={styles.resultHeaderDetail}>
                <h3>Vishal Digital University, Aligarh</h3>
                <h3>STATEMENT OF MARKS/GRADE</h3>
                <h3>EXAMINATION: 2023-24</h3>
                <h3>
                  {studentResult.course}-<span>{studentResult.semester}</span>
                </h3>
              </div>
            </div>

            <div className={styles.basicDetails}>
              <div>
                <p>
                  <span>Roll number:</span> {studentResult.rollNo}
                </p>
                <p>
                  <span>Name:</span> {studentResult.name}
                </p>
                <p>
                  <span>Father's Name:</span> {studentResult.fatherName}
                </p>
                <p>
                  <span>Date of Birth:</span> {studentResult.dateOfBirth}
                </p>
                <p>
                  <span>Enrollment Number:</span> {studentResult.enrollNo}
                </p>
                <p>
                  <span>Institute Name:</span> {studentResult.instituteName}
                </p>
              </div>
              <div>
                {/* Add the student's photograph */}
                <img
                  src={studentResult.photograph}
                  alt="Student Photograph"
                  className={styles.studentPhoto}
                />
              </div>
            </div>

            <div className={styles.resultTable}>
              <h3>Subject-wise Marks/Grades:</h3>
              <table className={styles.subjectTable}>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Paper title</th>
                    <th>Obtained marks</th>
                    <th>Total marks</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {studentResult.subjects.map((subject, index) => (
                    <tr key={index}>
                      <td>{subject.coursecode}</td>
                      <td>{subject.papertitle}</td>
                      <td>{subject.obtainedmarks}</td>
                      <td>{subject.totalmarks}</td>
                      <td>{subject.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.resultStatus}>
              <h3>
                Result Status: <span>{studentResult.resultStatus}</span>
              </h3>
            </div>
            <div className={styles.resultFooter}>
              <p>
                <span>Remarks: </span>In case of any discrepancy between the
                entries in the mark sheet and in the University record, the
                University record shall be final.
              </p>
              <div style={{ marginTop: "20px" }}>
                <p>
                  <span>Result Declared on: </span>
                  {studentResult.resultDate}
                </p>
                <p className={styles.signaturePara}>
                  <span>Authorized Signature: </span>
                  <img
                    src={sign}
                    alt="Authorized Signature"
                    className={styles.signature}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.downloadPrintButtonDiv}>
            {/* ... Download result as pdf ... */}
            <button
              onClick={handleDownloadResult}
              className={styles.downloadButton}
            >
              Download Result (PDF)
            </button>
            {/* ... print result ... */}
            <button onClick={handlePrintResult} className={styles.printButton}>
              Print Result
            </button>
          </div>
        </section>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </>
  );
}

export default Results;
