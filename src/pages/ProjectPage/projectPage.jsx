import { useParams } from "react-router-dom";
import projects from "../../projects.json";

function ProjectPage() {
  const { project_id } = useParams();
  const project = projects.find((p) => p.project_id === project_id);

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image.src} alt={project.image.alt} />
      <h2>{project.description}</h2>
      <h3>Description:</h3>
      <p>{project.details.scenario}</p>
      <h3>Mon rôle:</h3>
      <ul>
        {project.details.roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <h3>Fonctionnalités:</h3>
      <ul>
        {project.details.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3>Technologies utilisées:</h3>
      <ul>
        {project.details.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <img
        src={project.details.pictures[0].src}
        alt={project.details.pictures[0].alt}
      />
      <img
        src={project.details.pictures[1].src}
        alt={project.details.pictures[1].alt}
      />
      <img
        src={project.details.pictures[2].src}
        alt={project.details.pictures[2].alt}
      />
      <a href={project.details.link} target="_blank" rel="noopener noreferrer">
        Lien du projet
      </a>
    </div>
  );
}

export default ProjectPage;
