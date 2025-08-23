import projects from "../../projects.json";
import { useParams } from "react-router-dom";
import "./projectsDetail.css";

function ProjectsDetail() {
  const { project_id } = useParams();
  const project = projects.find((p) => p.project_id === project_id);

  if (!project) return <p>Projet introuvable</p>;
  return (
    <section className="project-detail">
      <h2>Description:</h2>
      <p>{project.details.scenario}</p>
      <h2>Mon rôle:</h2>
      <ul>
        {project.details.roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <h2>Fonctionnalités:</h2>
      <ul>
        {project.details.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Technologies utilisées:</h2>
      <ul>
        {project.details.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsDetail;
