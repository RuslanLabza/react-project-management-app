import Button from './Button';

export default function Sidebar({ projects, className, setProjectsData }) {
  return (
    <aside className={className}>
      <h2 className="text-2xl font-bold text-white mb-4">Your projects</h2>
      <Button full type="button" onClick={() => setProjectsData((projectsData) => ({...projectsData, currentProjectId: 'new'}))}>
        + Add Project
      </Button>
      
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="text-white  hover:text-amber-900 py-2 px-3 cursor-pointer transition duration-300 ease-in-out" onClick={() => setProjectsData((projectsData) => ({...projectsData, currentProjectId: project.id}))}>
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}