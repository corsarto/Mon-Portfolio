import { useParams } from "react-router-dom";
import projects from "../../projects.json";
import "./projectsPictures.css";

function ProjectsPictures() {
  const { project_id } = useParams();
  const project = projects.find((p) => p.project_id === project_id);

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div className="project-pictures">
      {project.details.pictures.map((picture, index) => (
        <img key={index} src={picture.src} alt={picture.alt} />
      ))}
    </div>
  );
}

export default ProjectsPictures;
