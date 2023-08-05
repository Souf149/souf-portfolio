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
    <p className="project-item">{`${key}. ${project.name}\t${project.description}`}</p>
  );
}

const PROJECTS: Project[] = [
  new Project("test1", "test1 is very cool!", undefined),
  new Project("test2", "test2 is very cool!", undefined),
  new Project("test3", "test3 is very cool!", undefined),
];
