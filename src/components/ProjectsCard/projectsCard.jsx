import projects from "../../projects.json";
import { Link } from "react-router-dom";
import "./projectsCard.css";

function ProjectsCard() {
  return (
    <div className="card-container">
      {projects.map((project) => (
        <Link key={project.id} to={`/projets/${project.project_id}`}>
          <div className="card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectsCard;
