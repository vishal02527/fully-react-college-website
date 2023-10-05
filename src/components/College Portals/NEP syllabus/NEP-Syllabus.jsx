import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./NEP-Syllabus.module.css";

function NEPSyllabus() {
  // Sample syllabus data for 13 courses
  const syllabusData = {
    BCA: `
      Semester 1:
      (i)	Computer Fundamentals and MS-Office
      (ii)	Introduction to Programming using C
      (iii)	Business Communication and Soft Skill
      (iv)	Introduction to HTMLCSS-XML
      (v)	Mathematics- I

      Semester 2:
      (i)	Object Oriented Programming using C++
      (ii)	Digital Electronics
      (iii)	Data Structure using C/C++
      (iv)	Principles of Management
      (v)	Numerical Methods

      Semester 3:
      (i)	Data Base Management System
      (ii)	E-Commerce and ERP
      (iii)	Computer Organization and Architecture
      (iv)	Operating System with the case study of UNIX & Windows
      (v)	Statistical Method and Application

      Semester 4:
      (i)	JAVA Programming
      (ii)	Web Technology with PHP & MySQL
      (iii)	Artificial Intelligence
      (iv)	Computer Networ
      (v)	Optimization Techniques

      Semester 5:
      (i)	Network Security
      (ii)	Visual Basic .NET
      (iii)	Computer Graphics
      (iv)	System Analysis & Design
      (v)	Design & Analysis of Algorithms

      Semester 6:
      (i)	Major Project (External)
    `,
    BBA: `
      Semester 1:
      (i)	Business Organization
      (ii)	Business Mathematics 
      (iii)	Business communication 
      (iv)	Fundamentals of Computers & Information Technology 
      (v)	Fundamentals of Accounting 
      (vi)	Business Environment
      
      Semester 2:
      (i)	Management thoughts & Philosophy 
      (ii)	Micro Economics for business 
      (iii)	Cost Accounting 
      (iv)	Legal & Regulatory framework of business 
      (v)	Business communication II 
      (vi)	Business Statistics

      Semester 3:
      (i)	Company Law
      (ii)      Marketing Management 
      (iii)     Macro Economics for Business 
      (iv)      Principles & Practices of Management 
      (v)	Organizational Behaviour 
      (vi)      Management Accounting

      Semester 4:
      (i)	Financial Management 
      (ii)	Project Management & Planning 
      (iii)	Research Methodology 
      (iv)	Human Resource management 
      (v)	Taxation Laws 
      (vi)	Production Management

      Semester 5:
      (i)	Operations research 
      (ii)	Sales & Distribution Management 
      (iii)	Business policy 
      (iv)	Entrepreneurship & Business Management

      Semester 6:
      (i)	E-Business Management & CRM 
      (ii)	Advertising Management 
      (iii)	Management of Financial Institutions & Services 
      (iv)	International Business management

    `,
    "MSC(CS)": `
      Semester 1:
      (i)   Discrete Mathematics
      (ii)  Digital Electronics
      (iii) Computer Organization and Architecture
      (iv)  Programming in C

      Semester 2:
      (i)   Object Oriented Programming Using C++
      (ii)  Operating System
      (iii) Database Management System
      (iv)  Numerical Methods

      Semester 3:
      (i)   Computer Network
      (ii)  Software Engineering
      (iii) System Analyse and Design
      (iv)  Data Structure Using C/C++

      Semester 4:
      (i)   Object Oriented Programming Using Java
      (ii)  Computer Graphics
      (iii) E-Commerce
      (iv)  Optimization Techniques
    `,
    "MSC(Math)": `
      Semester 1:
      (i)	Algebra – I
      (ii)	Real Analysis
      (iii)	Topology – I
      (iv)	Ordinary Differential Equations
      (v)	Discrete Mathematics
      (vi)	Mathematicians and the History of Mathematics

      Semester 2:
      (i)	Algebra – II
      (ii)	Complex Analysis
      (iii)	Topology – II
      (iv)	Functional Analysis
      (v)	Partial Differential Equations
      (vi)	Mathematical Modelling and Numerical Analysis – I

      Semester 3:
      (i)	Differential Geometry
      (ii)	Mathematical Methods
      (iii)	Fluid Mechanics
      (iv)	Numerical Analysis – II

      Semester 4:
      (i)	Measure And Integration
      (ii)	Elective IV
      (iii)	Elective V
      (iv)	Elective VI

    `,
    "MSC(Chemistry)": `
      Semester 1:
      (i)	Environmental Science
      (ii)	Inorganic Chemistry
      (iii)	Organic Chemistry 
      (iv)	Physical Chemistry

      Semester 2:
      (i)	Spectrochemical Analysis
      (ii)      Chemistry in daily life
      (iii)	Green chemistry
      (iv)      General inorganic &Analytical/Organic synthesis/Physical chemistry

      Semester 3:
      (i)	Chemistry of Nanomaterials
      (ii)      Applications of spectroscopy in inorganic chemistry / Organic Synthesis / Physical Chemistry
      (iii)	Bioinorganic chemistry/Synthesis and Bioorganic chemistry/Physical chemistry
      (iv)      Industrial Inorganic chemistry/Natural Products and Medicinal chemistry/Biophysical chemistry

      Semester 4: 
      (i)	Inorganic Chemistry
      (ii)      Organic Chemistry
      (iii)	Physical Chemistry
      (iv)      Research Methodology/Petroleum chemistry/Spectroscopic methods

    `,
    "MSC(Physics)": `
      Semester 1:
      (i)	Mathematical Physics
      (ii)	Classical Mechanics
      (iii)	Atomic and X-Ray Spectroscopy
      (iv)	Electrodynamics

      Semester 2:
      (i)	Advanced Mathematical Physics
      (ii)	Statistical Physics
      (iii)	Molecular and Laser Spectroscopy
      (iv)	Plasma Physics/Nano physics

      Semester 3: 
      (i)	Quantum Physics
      (ii)	Nuclear: Physics – 1
      (iii)	Electronics – 1 and Electronics – 2
      (iv)	Condensed Matter Physics – 1 and Condensed Matter Physics – 2

      Semester 4:
      (i)	Advanced Quantum Physics
      (ii)	Nuclear Physics – 2
      (iii)	Electronics – 3 and Electronics – 4
      (iv)	Condensed Matter Physics – 3 and Condensed Matter Physics – 4

    `,
    BCOM: `
      Semester 1:
      (i)	Advertising
      (ii)	Business communication
      (iii)	Financial accounting
      (iv)	Business environment

      Semester 2:
      (i)	Marketing communication
      (ii)	Business mathematics
      (iii)	Business regulatory framework
      (iv)	Business economics

      Semester 3:
      (i)	Advertising media
      (ii)	Business stastics
      (iii)	Management accounting
      (iv)	Principle of business management

      Semester 4:
      (i)	Personal selling and salesmanship
      (ii)	Corporate accounting
      (iii)	Financial management
      (iv)	Auditing

      Semester 5:
      (i)	Management of sales force
      (ii)	Principle of marketing
      (iii)	Income tax
      (iv)	Money and financial system

      Semester 6:
      (i)	Sales promotion and public relation
      (ii)	Cost accounting
      (iii)	Financial market operation
      (iv)	Entrepreneurship development or E-commerce

    `,
    MCOM: `
      Semester 1:
      (i)   Marketing Management
      (ii)  Organizational Behavior and Management Process
      (iii) Business Environment & Policy
      (iv)  Corporate Governance
      (v)   Computer Applications in Commerce

      Semester 2:
      (i)   Management and Financial Accounting      
      (ii)  Research Methods & Statistical Techniques
      (iii) Management of Nonprofit Organizations
      (iv)  Managerial Economics
      (v)   Research

      Semester 3:
      (i)   Management of Financial Services
      (ii)  Financial Management
      (iii) Managerial Communication
      (iv)  International Trade – Theory & Practice

      Semester 4: 
      (i)   E-Commerce
      (ii)  Elements of Income Tax
      (iii) Mergers & Acquisitions
      (iv)  Research and Internships
    `,
    MCA: `
      Semester 1:
      (i)	Computer Programming with C
      (ii)	Discrete Mathematical Structure
      (iii)	Database Management System
      (iv)	Unix and Shell Programming

      Semester 2:
      (i)	Software Engineering & TQM
      (ii)	Operation Research & Optimization Techniques
      (iii)	Advanced Database Management Systems
      (iv)	Operational Research

      Semester 3:
      (i)	Numerical and Scientific Computing
      (ii)	Distributed Systems
      (iii)	Software Project Management

      Semester 4:
      (i)	Organizational Behavior
      (ii)	Multimedia Technologies
      (iii)	Advanced Computer Architecture

    `,
    BE: `
      Semester 1:
      (i)   Engineering Mathematics-I
      (ii)  Engineering Physics
      (iii) Basic Electrical Engineering / Basic Electronics Engineering
      (iv)  Computer Programming  
      (v)   Energy and Environment Engineering

      Semester 2:
      (i)   Statistics and Numerical Methods
      (ii)  Engineering Chemistry
      (iii) Physics for Civil Engineering
      (iv)  Engineering Mechanics
      (v)   Engineering Graphics (Engineering Drawing)

      Semester 3:
      (i)   Engineering Mechanics 
      (ii)  Surveying and Levelling
      (iii) Fluid Mechanics 
      (iv)  Water Supply and Waste Water Engineering
      (v)   Disaster Management

      Semester 4:
      (i)   Applied Hydraulics Engineering
      (ii)  Concrete Technology
      (iii) Reinforced Concrete Design 
      (iv)  Solid Mechanics
      (v)   Construction Materials and Technology

      Semester 5:
      (i)   Structural Elements / Structural Analysis
      (ii)  Foundation Engineering
      (iii) Steel Structures Design
      (iv)  Geotechnical Engineering
      (v)   Irrigation Engineering
      
      Semester 6:
      (i)   Advanced Structural Analysis
      (ii)  Engineering Geology
      (iii) Reinforced Concrete Design 
      (iv)  Soil Mechanics
      (v)   Transportation Engineering

      Semester 7:
      (i)   Seismic Analysis & Design
      (ii)  Advance Transportation Engineering
      (iii) Maintenance of Buildings 
      (iv)  Elective

      Semester 8:
      (i)   Dams and Hydraulic Structures
      (ii)  Quantity Surveying, Contracts, and Tenders
      (iii) Advanced Environmental Engineering
      (iv)  Elective
    `,
    "BTECH(IT)": `
      Semester 1:
      (i) computer-aided design and drafting
      (ii)	Semiconductor Physics
      (iii)	Principles of Electrical and Electronics Engineering
      (iv)	Programming and Problem Solving
      (v)	Programming for Problem Solving Lab
      (vi)	Introduction to Computer Science and Engineering
      (vii)	Calculus and Abstract Algebra
      (viii)	Environmental Science
      
      Semester 2:
      (i)	Engineering Physics
      (ii)	Engineering Chemistry
      (iii)	Application-based Programming in Python
      (iv)	Probability and Statistics
      (v)	Mechanical Workshop
      (vi)	Application-based Programming in Python
      (vii)	Human Value & Ethics

      Semester 3:
      (i)	Probability and Statistics
      (ii)	Mathematical Foundations of Computer Science
      (iii)	Data Structures
      (iv)	Digital Logic Design and Computer Organization
      (v)	Electronic Devices and Circuits
      (vi)	Basic Electrical Engineering Electrical and Electronics Lab
      (vii)	Data Structures Lab

      Semester 4:
      (i)	Principles of Programming Languages
      (ii)	Database Management Systems
      (iii)	Java Programming
      (iv)	Environmental studies
      (v)	Data Communication
      (vi)	Design and Analysis of Algorithms
      (vii)	Java Programming Lab
      (viii)	Database Management Systems Lab

      Semester 5:
      (i)	Automata and Compiler Design
      (ii)	Linux Programming
      (iii)	Software Engineering
      (iv)	Operating Systems
      (v)	Computer Networks
      (vi)	Managerial Economics and Financial Analysis
      (vii)	Operating Systems Lab
      (viii)	Computer Networks Lab (Through Linux)

      Semester 6:
      (i)	Web Technologies
      (ii)	Object-Oriented Analysis and Design
      (iii)	Data Warehousing and Data Mining
      (iv)	Software Testing Methodologies
      (v)	Cloud Computing
      (vi)	Data Mining and Web Technologies Lab
      (vii)	Advanced Communication Skills Lab

      Semester 7:
      (i)	Information Security
      (ii)	Design Patterns
      (iii)	Mobile Application Development
      (iv)	Information Retrieval Systems
      (v)       Wireless Networks and Mobile/Soft Computing
      (vi)      Software Project Management Computer Graphics/Human-Computer Interaction
      (vii)	Mobile Applications Development Lab

      Semester 8:
      (i)	Management Science
      (ii)      Web Services E-Commerce/Middleware Technologies
      (iii)     Artificial Intelligence/Machine Learning
      (iv)      Industry Oriented Mini Project
      (v)       Seminar
      (vi)	Project Work
    `,
    "BSC(PCM)": `
      Semester 1:
      (i)	Mechanics and Wave Motion
      (ii)	Atomic Structure,Bonding, and hydrocarbons
      (iii)	Calculus
      (iv)	English

      Semester 2:
      (i)	Universal Human Values and Professional Ethics Foundation
      (ii)	Kinetic Theory
      (iii)	Chemical Energetic, Equilibrium & Organic Chemistry

      Semester 3:
      (i)	Thermodynamics 
      (ii)	Solutions, Electrochemistry &Organic Chemistry
      (iii)	Algebra

      Semester 4:
      (i)	Solid State Physics Skill Enhancement
      (ii)	Basic Analytical Chemistry
      (iii)	Computer Fundamentals

      Semester 5:
      (i)	Physical Optics
      (ii)	Lasers and Electrostatics
      (iii)	Electromagnetic
      (iv)	Industrial Chemicals and Environment

      Semester 6:
      (i)	Quantum Chemistry, Spectroscopy & Photochemistry 
      (ii)	Industrial Chemicals and Environment
      (iii)	Numerical Methods Discipline

    `,
    "BSC(CS)": `
      Semester 1:
      (i)	Introduction to Digital Electronics
      (ii)	Basics of Computer Science
      (iii)	Environmental Sciences
      (iv)	Foundation course in Mathematics
      (v)	Functional English-I

      Semester 2:
      (i)	Front Office Management
      (ii)	Discrete Mathematics
      (iii)	Computer Organization
      (iv)	Fundamental of Open-Source Software-LINUX
      (v)	Value and Ethics

      Semester 3:
      (i)	Object-Oriented Programming using C++
      (ii)	Operating Systems concepts
      (iii)	Introduction to Data Structures
      (iv)	System Analysis and design
      (v)	Technical Writing
      (vi)	Analytical Skill Development-I

      Semester 4:
      (i)	Database Management Systems
      (ii)	Introduction to Computer Network
      (iii)	Numerical Analysis
      (iv)	System Programming
      (v)	Report Writing (Yantra)
      (vi)	Analytical Skill Development-II

      Semester 5:
      (i)	Python programming
      (ii)	Introduction to Software Engineering
      (iii)	Mobile Application Development
      (iv)	Personality Development Program
      (v)	Mini Project-I

      Semester 6:
      (i)	Introduction to Web Technology
      (ii)	Project Work

    `,
  };

  // Use React Router's useParams to get the course name from the URL
  const { courseName } = useParams();
  const selectedSyllabus = syllabusData[courseName];

  return (
    <>
      <div className={styles.nepSyllabus}>
        <h2>NEP Syllabus</h2>
        <p>
          The National Education Policy (NEP) syllabus is designed to provide
          comprehensive education in various fields. Below, you can find the
          syllabus for the following courses:
        </p>

        {/* Conditionally render the syllabus content or the course list */}
        {selectedSyllabus ? (
          <div className={styles.syllabusContent}>
            <h3>{courseName} Syllabus</h3>
            <pre>{selectedSyllabus}</pre>
          </div>
        ) : (
          <ul className={styles.coursesList}>
            {Object.keys(syllabusData).map((course, index) => (
              <li key={index}>
                <Link to={`/NEP-syllabus/${course}`}>{course} syllabus</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default NEPSyllabus;
