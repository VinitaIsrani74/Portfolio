import React from "react";
import "./education.css";
const Education = () => {
  return (
    <div className="education-container" data-aos="zoom-in">
      <main className="row">
        <section className="col">
          <header>
            <h2 className="title">Education</h2>
          </header>

          <div className="contents">
            <div className="box">
              <h4>2021 - 2023</h4>
              <h3>Masters in Computer Application(MCA)</h3>
              <ul>
                <li>
                  Achieved a CGPA of 9.3 during
                  Master of Computer Applications (MCA) program.
                </li>
                <li>Secured the 2nd position among 120 students in the MCA program, demonstrating consistent academic excellence and performance.</li>
                <li>Attained a score of 90% in Data Structures and Algorithms (DSA), reflecting proficiency in fundamental computer science concepts and problem-solving skills.</li>
              </ul>
            </div>

            <div className="box">
              <h4>2018 - 2021</h4>
              <h3>Bachelor of Computer Applications(BCA)</h3>
              <ul>
                <li>
                  Achieved a CGPA of 7.9 during
                  Bachelor of Computer Applications (BCA) program.
                </li>
       
                <li>Attained a score of 80% in Data Structures and Algorithms (DSA).</li>
<li>My achievements reflect a journey of continuous learning and dedication.</li>
              </ul>
            </div>

           
          </div>
        </section>
      </main>
    </div>
  );
};

export default Education;
