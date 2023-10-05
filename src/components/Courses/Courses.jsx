import React from "react";
import styles from "./Courses.module.css";
import { Link, Route, Routes } from "react-router-dom";

const courses = [
  { id: 1, name: "BCA" },
  { id: 2, name: "BBA" },
  { id: 3, name: "MSC(CS)" },
  { id: 4, name: "MSC(Math)" },
  { id: 5, name: "MSC(Chemistry)" },
  { id: 6, name: "MSC(Physics)" },
  { id: 7, name: "BCOM" },
  { id: 8, name: "MCOM" },
  { id: 9, name: "MCA" },
  { id: 10, name: "BE" },
  { id: 11, name: "BTECH(IT)" },
  { id: 12, name: "BSC(PCM)" },
  { id: 13, name: "BSC(CS)" },
];

function Courses() {
  return (
    <>
      <div className={styles.courses}>
        <h2>Our Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}/${course.name}`}>
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Courses;
