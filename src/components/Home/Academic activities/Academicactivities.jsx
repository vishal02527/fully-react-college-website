import React from "react";
import { useParams } from "react-router-dom";
import styles from "./AcademicActivities.module.css";
import PageNotFound from "../../404 error page/404Page";

function AcademicActivities() {
  const { activity } = useParams();

  // Define content for different academic activities
  const activitiesContent = {
    "research-symposium": {
      title: "Research Symposium",
      description:
        "The Research Symposium is an annual event where students and faculty present their research findings. It provides a platform for intellectual discussions and knowledge sharing.",
      date: "Date: November 15-16, 2023",
      time: "Time: 9:00 AM - 4:00 PM",
      location: "Location: Campus Auditorium",
      image:
        "https://media.istockphoto.com/id/1458682606/photo/students-is-working-with-robot-arm-project.jpg?s=612x612&w=0&k=20&c=Z6zLjEawQkwBKvGGx7A9HO5SbpKpUCuQKDsSQSplZXM=",
    },
    "entrepreneurship-workshop": {
      title: "Entrepreneurship Workshop",
      description:
        "The Entrepreneurship Workshop is a hands-on program aimed at nurturing students’ entrepreneurial skills. Participants will learn about business ideation, planning, and startup fundamentals.",
      date: "Date: December 5-7, 2023",
      time: "Time: 10:00 AM - 2:00 PM",
      location: "Location: Business School Building",
      image:
        "https://media.istockphoto.com/id/1093925980/photo/successful-happy-group-of-people-learning-software-engineering-and-business-during.jpg?s=612x612&w=0&k=20&c=ic9E7uoMB1FxkpS135aQGcPsvfzlqtWamJuu5DBYNNs=",
    },
    "drawing-competition": {
      title: "Drawing Competition",
      description:
        'Join our exciting Drawing Competition and showcase your artistic talent. Theme: "Nature\'s Beauty". Prizes to be won!',
      date: "Date: June 5, 2024",
      time: "Time: 2:00 PM - 5:00 PM",
      location: "Location: Art Studio",
      image:
        "https://media.istockphoto.com/id/844357070/photo/back-to-school-concept.jpg?s=612x612&w=0&k=20&c=N91gKNVv8ljPNcpx3Aha2m8yct_b8QHdBnuBdqP-ZLY=",
    },
    "quiz-mania": {
      title: "Quiz Mania",
      description:
        "Test your knowledge in our Quiz Mania event. Fun questions, great prizes, and intellectual glory await!",
      date: "Date: July 10, 2024",
      time: "Time: 3:00 PM - 6:00 PM",
      location: "Location: College Hall",
      image:
        "https://media.istockphoto.com/id/1369997376/vector/quiz-background.jpg?s=612x612&w=0&k=20&c=Wwad4O9O31FGjFCBknfU4wBS99lICbaNaFlpQ3PK-4o=",
    },
    "coding-challenge": {
      title: "Coding Challenge",
      description:
        "Calling all coders! Join our Coding Challenge and solve real-world problems. Cash prizes for the best solutions!",
      date: "Date: August 8, 2024",
      time: "Time: 9:30 AM - 4:30 PM",
      location: "Location: Computer Lab",
      image:
        "https://media.istockphoto.com/id/1262697466/vector/programming-code-icon-3d-low-polygonal-abstract-programming-code-symbol-coding-or-hacker.jpg?s=612x612&w=0&k=20&c=9A8KUPzUHRvyAbIWR7wUzPhXVahBesidXexyqTd71fI=",
    },
    "poetry-contest": {
      title: "Poetry Contest",
      description:
        'Express yourself through poetry in our Poetry Contest. Theme: "Emotions Unveiled". Winners get published in our annual poetry book!',
      date: "Date: September 12, 2024",
      time: "Time: 6:00 PM - 8:00 PM",
      location: "Location: Library Seminar Room",
      image:
        "https://media.istockphoto.com/id/1313283994/vector/3d-isometric-flat-vector-conceptual-illustration-of-creative-content-writing.jpg?s=612x612&w=0&k=20&c=mQ4aX12qBxcwK1j9o8BUwYlyJQxWFkb-W-suMfLGqkQ=",
    },
    "acting-show": {
      title: "Acting Show",
      description:
        "Drama enthusiasts, this is your stage! Showcase your acting skills in our Acting Show. Drama scripts provided!",
      date: "Date: October 18, 2024",
      time: "Time: 7:30 PM - 10:30 PM",
      location: "Location: College Auditorium",
      image:
        "https://media.istockphoto.com/id/1322032180/vector/children-taking-acting-classes-vector-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=fd98zjT7U4zWPUc0qpU7yy3hCztWnSqpYUdXy51Yg-U=",
    },
  };

  const selectedActivity = activitiesContent[activity];

  if (!selectedActivity) {
    // If the selected activity doesn't exist in the content object, show an error message.
    return <PageNotFound />;
  }

  return (
    <div className={styles.activityContainer}>
      <div className={styles.activityImage}>
        <img src={selectedActivity.image} alt={selectedActivity.title} />
      </div>
      <div className={styles.activityDetails}>
        <h2>{selectedActivity.title}</h2>
        <p className={styles.description}>{selectedActivity.description}</p>
        <p>{selectedActivity.date}</p>
        <p>{selectedActivity.time}</p>
        <p>{selectedActivity.location}</p>
      </div>
    </div>
  );
}

export default AcademicActivities;
