import "../style/reuseable.css";
import "../style/projects.css";
import "../style/tablet.css";
import "../style/mobile.css";

function ProjectCard({ href, img, title, description }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"  className="project-container-one flex centerY flex-start column" id="project-mobile" >
        <img src={img} alt="portfolio projects" id="project-img" />
      <div class="contain-mobile flex centerH centerY  column">
        <h2 className="pb-2">{title} </h2>
        <h5> {description}</h5>
      </div>
      <div className=" contain">
        <div class="flex centerH centerY full-width full-height column">
          <h2 className="pb-2">{title} </h2>
          <h5> {description}</h5>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
