import React from 'react';

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Personal Portfolio Website</h3>
        <p>Designed and developed a responsive personal portfolio using HTML, CSS, and JavaScript. 
            It showcases my projects and skills with a clean and modern interface.</p>
      </div>
      <div className="project-card">
        <h3>Task Manager App</h3>
        <p>Built a simple web app that helps users organize and track daily tasks using React and local storage. 
            The app includes task filtering and completion tracking.</p>
      </div>
      <div className="project-card">
        <h3>Portfolio Redesign</h3>
        <p>Revamped my personal portfolio to reflect a more modern and responsive layout using Bootstrap and CSS animations.</p>
      </div>
    </section>
  );
}

export default Projects;