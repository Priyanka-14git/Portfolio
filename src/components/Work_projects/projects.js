import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    { title: "Project1", description: "e.g.A personal website built with React." },
    { title: "Project2", description: "e.g.A shopping platform built with React and Redux." },
    { title: "Project3", description: "e.g.A task management app with modern UI." }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
