import Button from "./Button";

export default function Sidebar({
  projectsData,
  onCreateNewProjectPage,
  onSelectProject,
  className,
}) {
  return (
    <aside className={className}>
      <h2 className="text-2xl font-bold text-white mb-4">Your projects</h2>
      <Button full type="button" onClick={onCreateNewProjectPage}>
        + Add Project
      </Button>

      <ul className="space-y-2">
        {projectsData.projects.map((project) => {
          let classes =
            "hover:text-amber-900 py-2 px-3 cursor-pointer transition duration-300 ease-in-out";
          if (project.id === projectsData.currentProjectId) {
            classes += " text-amber-900";
          } else {
            classes += " text-white";
          }
          return (
            <li
              key={project.id}
              className={classes}
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
