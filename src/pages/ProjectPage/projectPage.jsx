import { useParams } from "react-router-dom";
import projects from "./projects.json";

function ProjectPage() {
  const { project_id } = useParams();
  const project = projects.find(p => p.project_id === project_id);

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectPage;