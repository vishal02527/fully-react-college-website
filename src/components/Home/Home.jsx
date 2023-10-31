import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "./Home Cards/Card";
import NoticeBoard from "../Notices/Notices and updates board/NoticeBoard";
import AdmissionNoticeBoard from "../Notices/Admission list board/AdmissionList";
import creator from '../images/creator.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed (in milliseconds)
  };

  const marqueeRef = useRef(null);

  const stopMarquee = () => {
    marqueeRef.current.stop();
  };

  const startMarquee = () => {
    marqueeRef.current.start();
  };

  return (
    <div className={styles.home}>
      {/* section for Carousel */}
      <section className={styles.carousel}>
        <div className={styles.carouselContainer}>
          <Slider {...carouselSettings}>
            <div>
              <img
                src="https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?s=612x612&w=0&k=20&c=Cg9aAKKOFJkukureA3hzdnXin42O-GCBP60b4h5CLic="
                alt="Carousel 1"
                width={1600}
                height={500}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1254127323/photo/businesswoman-holding-a-speech.jpg?s=612x612&w=0&k=20&c=HpdVnNM-fIjoy1NI-iE01H4oDKn3DScwr1jqkEf9aMk="
                alt="Carousel 3"
                width={1600}
                height={500}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1142003221/photo/upasna-ghar-kaanch-mandir-a-prayer-hall-inside-the-visva-bharati-university-campus-at.jpg?s=612x612&w=0&k=20&c=TTEb-pOJQbe0KzUzmF2mIBUp2eX7IQYhwYM5TTqGxsc="
                alt="Carousel 2"
                width={1600}
                height={500}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/541577650/photo/students-go-to-campus-through-park.jpg?s=612x612&w=0&k=20&c=fNmEJh5s0X-0ddiBGEuyxN6HQhNIwEAQVIAlq0txFvU="
                alt="Carousel 3"
                width={1600}
                height={500}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1262645363/vector/vector-of-students-standing-in-line-to-enter-university.jpg?s=612x612&w=0&k=20&c=ngSxj-OZVJS9oFX8h5i6RhxeAB9WzJmOqEY2eGZWSbo="
                alt="Carousel 3"
                width={1600}
                height={500}
                className={styles.carouselImage}
              />
            </div>
          </Slider>
        </div>
      </section>
      {/* section for latest news marquee */}
      <section className={styles.marqueediv}>
        <div className={styles.latestnews}>Latest news</div>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          onMouseOver={stopMarquee}
          onMouseOut={startMarquee}
          ref={marqueeRef}
        >
          <Link to="/latest-news/online-noc">
            <span>Online NOC and Affiliation System</span>
          </Link>
          <Link to="/latest-news/registrar-notice">
            <span>Registrar Notice-International Day of Non-Violence</span>
          </Link>
          <Link to="/latest-news/recruitment-advertisement">
            <span>Recruitment Advertisement-Guest Faculty 2023-24</span>
          </Link>
        </marquee>
      </section>
      {/* section for notice boards */}
      <section className={styles.collegenotices}>
        <NoticeBoard />
        <AdmissionNoticeBoard />
      </section>
      {/* section for College Portals */}
      <section className={styles.portals}>
        <h2>College Portals</h2>
        <div className={styles.portalLinks}>
          <Link to={"/results"} className={styles.portalLink}>
            <div className={styles.portalbtn}>Result</div>
          </Link>
          <Link to={"/academic-staff"} className={styles.portalLink}>
            <div className={styles.portalbtn}>Academic staff</div>
          </Link>
          <Link to={"/NEP-syllabus"} className={styles.portalLink}>
            <div className={styles.portalbtn}>NEP syllabus</div>
          </Link>
          <Link to={"/online-services"} className={styles.portalLink}>
            <div className={styles.portalbtn}>Online services</div>
          </Link>
          <Link to={"/e-learning"} className={styles.portalLink}>
            <div className={styles.portalbtn}>E-Learning</div>
          </Link>
        </div>
      </section>
      {/* section for Important person of the university */}
      <section className={styles.importantPersonSection}>
        <div className={styles.governorDiv}>
          <img
            src="https://rmpssu.ac.in/images/UP-GOVERNOR.jpg"
            alt="Governor of U.P."
            width="260"
            height="250"
          />
          <div className={styles.governorDetailDiv}>
            <h8 className={styles.governorName}>
              Smt. Anandiben Patel
            </h8>
            <p className={styles.governorPara}>
              Hon’ble Chancellor &amp;
              <br /><br />
              H.E. Governor of U.P.
            </p>

            <button className={styles.ProfileBtn}>
              <a
                class="msg-btn"
                href="https://upgovernor.gov.in/en/page/profile"
                target="_blank"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
        <div className={styles.creatorDiv}>
          <img
            src={creator}
            alt="creator of V.D.U"
            width="260"
            height="250"
          />
          <div className={styles.creatorDetailDiv}>
            <h8 className={styles.creatorName}>
              Mr. Vishal Kumar
            </h8>
            <p className={styles.creatorPara}>
              Hon’ble Founder &amp;
              <br /><br />
              Creator of V.D.U.
            </p>

            <button className={styles.ProfileBtn}>
              <a
                href="https://vishal-creator-profile.netlify.app/"
                target="_blank"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
        <div className={styles.viceChancellorDiv}>
          <img
            src="https://rmpssu.ac.in/img/VC.jpeg"
            alt="vice chancellor"
            width="260"
            height="250"
          />
          <div className={styles.viceChancellorDetailDiv}>
            <h8 className={styles.viceChancellorName}>
              Professor Chandrashekhar
            </h8>
            <p className={styles.viceChancellorPara}>
              Hon’ble vice chancellor &amp;
              <br /><br />
              Head of anti-ragging committee
            </p>

            <button className={styles.ProfileBtn}>
              <a
                href="#"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* section for College Feature Cards */}
      <section className={styles.cards}>
        <h2>Explore Our Features</h2>
        <div className={styles.cardContainer}>
          <Link to={"/academic-activities"}>
            <Card
              title="Academic Programs"
              description="Discover our wide range of academic programs."
              imageUrl="https://media.istockphoto.com/id/1024531876/photo/key-success-in-graduate-study-abroad-program-and-open-or-expand-world-view-experience-concept.jpg?s=612x612&w=0&k=20&c=JmOTvUiZgXG8okKmoakKD_CGi0j8cd_mC5HhT3ayysY="
            />
          </Link>
          <Link to={"/campus"}>
            <Card
              title="Campus Life"
              description="Explore our vibrant campus life and activities."
              imageUrl="https://media.istockphoto.com/id/1298197207/vector/children-online-learning-concept.jpg?s=612x612&w=0&k=20&c=GukmEs0Lc27npsyAq5VL87-kGkD2HD_pJJ6rFpYP8BY="
            />
          </Link>
          <Link to={"/admission-process"}>
            <Card
              title="Admission Process"
              description="Learn about our admission procedures."
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZowIaxqvuGBIgTpIJ6oz3GRhc0qo7rnEtQ&usqp=CAU"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
