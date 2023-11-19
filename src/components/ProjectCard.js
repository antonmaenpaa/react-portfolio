import "../style/reuseable.css";
import "../style/projects.css";
import "../style/tablet.css";
import "../style/mobile.css";

function ProjectCard({ href, img, title, description }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer" 
      className="project-container-one flex centerY flex-start column"
      id="project-mobile"
  
    >
      <div 
        className="project-inner-container"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
      >
        <div className="contain-mobile flex centerH centerY  column">
          <h2 className="pb-2">{title} </h2>
          <h5> {description}</h5>
        </div>
        <div className=" contain">
          <div className="flex centerH centerY full-width full-height column">
            <h2 className="pb-2">{title} </h2>
            <h5> {description}</h5>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
