import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import PageNotFound from "../404 error page/404Page";

function CourseDetails() {
  // Access the route parameters using useParams
  const { id, name } = useParams();

  const courseDetails = {
    1: {
      title: "Bachelor of Computer Applications (BCA)",
      description:
        "BCA is a 3-year undergraduate program that focuses on computer science and its applications. It covers programming, data structures, web development, and more.",
      eligibility: "10+2 in any stream with mathematics",
      duration: "3 years",
      jobOpportunities: [
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "System Analyst",
      ],
    },
    2: {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "BBA is a 3-year undergraduate program that covers various aspects of business management. It includes courses in marketing, finance, human resources, and more.",
      eligibility: "10+2 in any stream",
      duration: "3 years",
      jobOpportunities: [
        "Business Analyst",
        "Marketing Manager",
        "Financial Analyst",
        "HR Manager",
      ],
    },
    3: {
      title: "Master of Science in Computer Science (MSC CS)",
      description:
        "MSC in Computer Science is a postgraduate program focusing on advanced computer science topics including algorithms, data structures, and software development.",
      eligibility: "Bachelor's degree in computer science or related field",
      duration: "2 years",
      jobOpportunities: [
        "Software Engineer",
        "Data Scientist",
        "AI/Machine Learning Engineer",
        "Software Architect",
      ],
    },
    4: {
      title: "Master of Science in Mathematics (MSC Math)",
      description:
        "MSC in Mathematics is a postgraduate program that provides in-depth knowledge of advanced mathematical concepts and their applications.",
      eligibility: "Bachelor's degree in mathematics or related field",
      duration: "2 years",
      jobOpportunities: [
        "Mathematician",
        "Data Analyst",
        "Statistician",
        "Actuary",
      ],
    },
    5: {
      title: "Master of Science in Chemistry (MSC Chemistry)",
      description:
        "MSC in Chemistry is a postgraduate program that focuses on the study of chemical compounds, reactions, and their applications.",
      eligibility: "Bachelor's degree in chemistry or related field",
      duration: "2 years",
      jobOpportunities: [
        "Chemist",
        "Research Scientist",
        "Quality Control Analyst",
        "Lab Technician",
      ],
    },
    6: {
      title: "Master of Science in Physics (MSC Physics)",
      description:
        "MSC in Physics is a postgraduate program that delves into advanced concepts in physics, including quantum mechanics and electromagnetism.",
      eligibility: "Bachelor's degree in physics or related field",
      duration: "2 years",
      jobOpportunities: [
        "Physicist",
        "Research Scientist",
        "Physics Teacher",
        "Astronomer",
      ],
    },
    7: {
      title: "Bachelor of Commerce (BCOM)",
      description:
        "BCOM is a 3-year undergraduate program that focuses on commerce, accounting, finance, and related subjects.",
      eligibility: "10+2 in commerce or any stream",
      duration: "3 years",
      jobOpportunities: [
        "Accountant",
        "Financial Analyst",
        "Auditor",
        "Tax Consultant",
      ],
    },
    8: {
      title: "Master of Commerce (MCOM)",
      description:
        "MCOM is a 2-year postgraduate program that offers advanced knowledge in commerce and finance-related subjects.",
      eligibility: "Bachelor's degree in commerce or related field",
      duration: "2 years",
      jobOpportunities: [
        "Finance Manager",
        "Accounting Manager",
        "Business Analyst",
        "Financial Controller",
      ],
    },
    9: {
      title: "Master of Computer Applications (MCA)",
      description:
        "MCA is a 2-year postgraduate program that delves deeper into computer science and software development. It includes advanced topics in programming, algorithms, and more.",
      eligibility: "Bachelor's degree in any stream with mathematics",
      duration: "2 years",
      jobOpportunities: [
        "Software Engineer",
        "IT Consultant",
        "Software Architect",
        "Project Manager",
      ],
    },
    10: {
      title: "Bachelor of Engineering (BE)",
      description:
        "BE is a 4-year undergraduate program that offers specialized engineering disciplines such as Civil, Mechanical, Electrical, and more.",
      eligibility: "10+2 in science with PCM",
      duration: "4 years",
      jobOpportunities: [
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
        "Software Engineer",
      ],
    },
    11: {
      title: "Bachelor of Technology (BTECH)",
      description:
        "BTECH is a 4-year undergraduate program that focuses on various engineering and technology disciplines.",
      eligibility: "10+2 in science with PCM",
      duration: "4 years",
      jobOpportunities: [
        "Software Engineer",
        "Network Engineer",
        "Electronics Engineer",
        "Aerospace Engineer",
      ],
    },
    12: {
      title: "Bachelor of Science in Physics, Chemistry, Mathematics (BSC PCM)",
      description:
        "BSC in Physics, Chemistry, and Mathematics is a 3-year undergraduate program that provides a strong foundation in science and mathematics.",
      eligibility: "10+2 in science with PCM",
      duration: "3 years",
      jobOpportunities: [
        "Research Scientist",
        "Teacher",
        "Data Analyst",
        "Lab Technician",
      ],
    },
    13: {
      title: "Bachelor of Science in Computer Science (BSC CS)",
      description:
        "BSC in Computer Science is a 3-year undergraduate program that focuses on computer science principles and programming.",
      eligibility: "10+2 in any stream",
      duration: "3 years",
      jobOpportunities: [
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "System Analyst",
      ],
    },
  };

  // Get the course details based on the route parameter
  const course = courseDetails[id];

  // Check if the course exists otherwise show page not found page
  if (!course) {
    return <PageNotFound />;
  }

  return (
    <div className={styles["course-details-container"]}>
      <div className={styles["course-details"]}>
        <h2>{course.title}</h2>
        <p>
          <strong>Description:</strong> {course.description}
        </p>
        <p>
          <strong>Eligibility:</strong> {course.eligibility}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Job Opportunities:</strong>
        </p>
        <ul>
          {course.jobOpportunities.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
        <Link to={"/admission"}>
          <button className={styles.applybtn}>Apply now</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseDetails;
