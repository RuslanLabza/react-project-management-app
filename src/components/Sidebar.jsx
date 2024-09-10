import Button from './Button';

export default function Sidebar({ projects, className, setAddProject }) {
  return (
    <aside className={className}>
      <h2 className="text-2xl font-bold text-white mb-4">Your projects</h2>
      <Button full type="button" onClick={() => setAddProject(true)}>
        + Add Project
      </Button>
      
      <ul className="space-y-2">
        {projects.map((project, index) => (
          <li key={index} className="text-white  hover:text-amber-900 py-2 px-3 cursor-pointer transition duration-300 ease-in-out">
            {project}
          </li>
        ))}
      </ul>
    </aside>
  );
}