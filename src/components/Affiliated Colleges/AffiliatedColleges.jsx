import React from "react";
import styles from "./AffiliatedColleges.module.css";

function AffiliatedColleges() {
  const colleges = [
    {
      id: 1,
      code: "1001",
      name: "VEERANGANA AVANTI BAI GOVERNMENT DEGREE COLLEGE, ATROLI, ALIGARH",
    },
    { 
      id: 2, 
      code: "1002", 
      name: "GOVERNMENT DEGREE COLLEGE, KHAIR, ALIGARH", 
    },
    { 
      id: 3, 
      code: "1003", 
      name: "RAJKIYE MAHAVIDYALAYA, GONDA, ALIGARH", 
    },
    { id: 4, 
      code: "1004", 
      name: "D.S. COLLEGE, ALIGARH", 
    },
    { 
      id: 5, 
      code: "1005", 
      name: "SRI VARSHNEY COLLEGE, ALIGARH", 
    },
    { 
      id: 6, 
      code: "1006", 
      name: "SRI TIKARAM KANYA MAHAVIDYALAYA, ALIGARH", 
    },
    { 
      id: 7, 
      code: "1007", 
      name: "GOVERNMENT DEGREE COLLEGE, KASGANJ", 
    },
    {
      id: 8,
      code: "1008",
      name: "ALIGARH COLLEGE OF ENGINEERING AND TECHNOLOGY, MATHURA ROAD, ALIGRAH",
    },
    {
      id: 9,
      code: "1009",
      name: "GAGAN COLLEGE OF MANAGEMENT AND TECHNOLOGY,ALIGARH",
    },
    { 
      id: 10, 
      code: "1010", 
      name: "GYAN MAHAVIDYALAYA, AGRA ROAD, ALIGARH", 
    },
    {
      id: 11,
      code: "1011",
      name: "CHANDRA PRABHA MAHAVIDYALAYA, SARAI NEEM, JALESAR, ETAH",
    },
    { 
      id: 12, 
      code: "1012", 
      name: "S.K. COLLEGE, G.T. ROAD, ETAH", 
    },
    { 
      id: 13, 
      code: "1013", 
      name: "M.R. DEGREE COLLEGE, MAIMRHEE, KASGANJ", 
    },
    {
      id: 14,
      code: "1014",
      name: "HAJJIN SADIKA BEGUM MAHAVIDYALAYA, BHARGAIN,KASGANJ",
    },
    {
      id: 15,
      code: "1015",
      name: "SRI TIKARAM MAHAVIDYALAYA, SALEMPUR, SADABAD, HATHRAS",
    },
    {
      id: 16,
      code: "1016",
      name: "SRI KRISHNA MAHAVIDYALAYA, AUGSOLI, SIKANDRARAO, HATHRAS",
    },
    {
      id: 17,
      code: "1017",
      name: "MAA JANKI DEVI MAHAVIDYALAYA, PORA, HATHRAS",
    },
    {
      id: 18,
      code: "1018",
      name: "SRI P.P.S. COLLEGE, NAGLA KHOKAR, BEGAUR, ETAH",
    },
    {
      id: 19,
      code: "1019",
      name: "SRI LALA RAM SHARMA MEMORIAL MAHAVIDYALAYA,JARARA, ALIGARH",
    },
    {
      id: 20,
      code: "1020",
      name: "P.M. COLLEGE OF EDUCATION, KARSUA, ALIGARH",
    },
  ];

  return (
    <div className={styles.collegesContainer}>
      <h2>Affiliated Colleges</h2>
      <table className={styles.collegeTable}>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>College Code</th>
            <th>College Name</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <tr key={college.id}>
              <td>{index + 1}</td>
              <td>{college.code}</td>
              <td>{college.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AffiliatedColleges;
