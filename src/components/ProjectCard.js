import "../style/reuseable.css";
import "../style/projects.css";
import "../style/tablet.css";
import "../style/mobile.css";

function ProjectCard({ href, img, title, description }) {
  return (
    <div className="project-container-one flex centerY flex-start column" id="project-mobile">
      <a href={href} target="_blank" rel="noreferrer" id="project-link">
        <img src={img} alt="portfolio projects" id="project-img" />
      </a>
      <h2>{title} </h2>
      <h5> {description}</h5>
    </div>
  );
}

export default ProjectCard;
