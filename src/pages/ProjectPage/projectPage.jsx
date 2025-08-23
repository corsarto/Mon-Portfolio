import { useParams } from "react-router-dom";
import projects from "../../projects.json";
import ProjectsDetail from "../../components/ProjectsDetail/projectsDetail";
import ProjectsPictures from "../../components/ProjectsPictures/projectsPictures";
import "./projectPage.css";

function ProjectPage() {
  const { project_id } = useParams();
  const project = projects.find((p) => p.project_id === project_id);

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div>
      <div className="projects-header">
        <h1>{project.title}</h1>
        <img src={project.image.src} alt={project.image.alt} />
      </div>
      <ProjectsDetail />
      <ProjectsPictures />
      <h2>Lien du projet:</h2>
      <a href={project.details.link} target="_blank" rel="noopener noreferrer">
        {project.details.link}
      </a>
    </div>
  );
}

export default ProjectPage;
