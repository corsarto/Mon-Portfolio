import ProjectsCard from "../ProjectsCard/projectsCard";
import "./projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <p>Découvrez mes projets récents.</p>
      <ProjectsCard />
    </section>
  );
}

export default Projects;
