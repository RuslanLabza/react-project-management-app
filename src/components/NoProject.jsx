import NoProjectsImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProject({ className, setProjectsData }) {
  return (
    <section className={`${className} text-center`}>
      <img 
        src={NoProjectsImg} 
        alt="No Project" 
        className="w-32 h-32 object-cover mx-auto mb-8"
      />
      <h2 className="text-3xl font-bold text-stone-700 mb-4">No Project Selected</h2>
      <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
      <Button full type="button" onClick={() => setProjectsData((projectsData) => ({...projectsData, currentProjectId: 'new'}))}>
        + Add Project
      </Button>
    </section>
  );
}