import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import CourseDetails from "./components/Courses/CourseDetails";
import Admission from "./components/Admission/Admission";
import AffiliatedColleges from "./components/Affiliated Colleges/AffiliatedColleges";
import Gallery from "./components/Gallery/Gallery";
import LatestNews from "./components/Home/Latest news/LatestNews";
import NoticesAndUpdates from "./components/Notices/Notices and updates board/Notices&Updates";
import AdmissionListNotices from "./components/Notices/Admission list board/AdmissionListNotices";
import Results from "./components/College Portals/Result/Results";
import AcademicStaff from "./components/College Portals/Academic staff/AcademicStaff";
import OnlineServices, {
  ExaminationForm,
  FeesPayment,
  LibraryContent,
} from "./components/College Portals/Online services/OnlineServices";
import Login from "./components/College Portals/Online services/Login";
import NEPSyllabus from "./components/College Portals/NEP syllabus/NEP-Syllabus";
import ELearning from "./components/College Portals/E-learning/E-Learning";
import LearningPage from "./components/College Portals/E-learning/LearningPage";
import BasicDetails from "./components/Home/Academic activities/BasicDetails";
import AcademicActivities from "./components/Home/Academic activities/Academicactivities";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/404 error page/404Page";
import Feedback from "./components/Footer/Feedback";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id/:name" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/affiliated-colleges" element={<AffiliatedColleges />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/latest-news/:newsName" element={<LatestNews />} />
        <Route
          path="/notices-and-updates/:notice"
          element={<NoticesAndUpdates />}
        />
        <Route
          path="/admission-list/:notice"
          element={<AdmissionListNotices />}
        />
        <Route path="/results" element={<Results />} />
        <Route path="/academic-staff" element={<AcademicStaff />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/e-learning" element={<ELearning />} />
        <Route path="/e-learning/:course" element={<LearningPage />} />
        <Route path="/NEP-syllabus" element={<NEPSyllabus />} />
        <Route path="/NEP-syllabus/:courseName" element={<NEPSyllabus />} />
        <Route
          path="/online-services/examination-form"
          element={<ExaminationForm />}
        />
        <Route path="/online-services/fees-payment" element={<FeesPayment />} />
        <Route
          path="/online-services/library-access"
          element={
            loggedIn ? (
              <LibraryContent onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/:detail" element={<BasicDetails />} />
        <Route path="/:detail/:activity" element={<AcademicActivities />} />
        <Route path="/share_your_feedback" element={<Feedback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
