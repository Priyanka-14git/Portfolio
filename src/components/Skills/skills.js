import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

const Skills = () => {
  const skills = [
    "Prompt Engineering", "ChatGPT", "Natural Language Processing", 
    "Artificial Intelligence", "Software Development", "Research & Development",
    "Project Management", "Sphinx", "Swagger API", "Kubernetes", "Docker", 
    "Rest API's", "Jenkins", "Azure DevOps", "Mongo DB", "Linux", 
    "Data Structures", "Python (Programming Language)", "C (Programming Language)", 
    "Object Oriented Programming", "Data Analysis", "Data Science", 
    "Data Visualization", "Machine Learning", "SQL"
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset animation
          setTimeout(() => setIsVisible(true), 100); // Re-trigger animation
        }
      },
      { threshold: 0.3 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <div className={`skills-grid ${isVisible ? "animate" : ""}`}>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


