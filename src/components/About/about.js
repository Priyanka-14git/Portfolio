import React from "react";
import "./about.css";

const About = () => {
  const milestones = [
    { year: "2022", title: "Computer Science Engineer at Dr. APJ Abdul Kalam Technical University" },
    { year: "2022-23", title: "Software Engineer at Telaverge Communications" },
    { year: "2023", title: "AI Software Developer" },
    { year: "2023", title: "Full Stack Engineer" },
    { year: "2024", title: "CTO at Facesearch AI" },
    { year: "2024", title: "CTO at Persistent Ventures" },
  ];

  return (
    <div id='about'>
     <h2 style={{ textAlign: 'center'}}>Journey</h2>
    <div className="timeline">
      <div className="timeline-container">
        {milestones.map((milestone, index) => (
          <div className="milestone" key={index}>
            <div className="circle">
              <span className="tooltip">{milestone.title}</span>
            </div>
            <div className="label">
              <p>{milestone.year}</p>
            </div>
          </div>
        ))}
        <div className="line"></div>
      </div>
    </div>
    </div>
  );
};

export default About;









