import Project from "./Project";

export function ProjectsPage() {
  return (
    <div className="projects-page-root">
      <p className="page-title">Welcome to the Projectspage</p>

      <div className="projects-container">
        {PROJECTS.map((p, i) => (
          <ProjectComponent project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

interface ProjectComponentProps {
  project: Project;
  index: number;
}

function ProjectComponent({ project, index: key }: ProjectComponentProps) {
  return (
    <div className="project-item">
      <img
        className="project-item-image"
        src={project.previewImageUrl ?? ""}
        alt={"project.name"}
      />
      <div className="project-item-info-container">
        <p
          style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}
        >{`${key}. ${project.name}`}</p>
        <p>{project.description}</p>
        <div className="project-item-button-container">
          <button className="project-item-button"> CLICK ME</button>
          <button className="project-item-button"> CLICK ME</button>
          <button className="project-item-button"> CLICK ME</button>
        </div>
      </div>
    </div>
  );
}

const PROJECTS: Project[] = [
  new Project(
    "test1",
    "test1 is very cool! I have learned a lot with it and would love more",
    "assets/pawns.jpg"
  ),
  new Project(
    "test2",
    "test2 is very cool! But I dont know what I can do with this",
    "assets/arcade_stick.jpg"
  ),
  new Project("test3", "test3 is very cool!", "assets/cartridges.jpg"),
];
