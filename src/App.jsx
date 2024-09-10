import NewProject from './components/NewProject';
import NoProject from './components/NoProject';
import Sidebar from './components/Sidebar';
import Project from './components/Project';
import { useState } from 'react';

function App() {
  const [projectsData, setProjectsData] = useState({
    projects: [{
      id: 0,
      title: 'Project 1',
      description: 'Description 1',
      dueDate: '2024-01-01',
      tasks: [{
        id: 0,
        title: 'Task 1',
        description: 'Description 1',
        dueDate: '2024-01-01',
      }],
    }],
    currentProjectId: null,
  });

  const getProjectData = () => {
    const project = projectsData.projects.find((project) => project.id === projectsData.currentProjectId);
    return project;
  }

  return (
    <div className="h-screen w-3/6 mx-auto">
      <main className="flex mt-10">
        <Sidebar className="bg-amber-800 w-64 h-screen p-4 rounded-r-lg" projects={projectsData.projects} setProjectsData={setProjectsData} />
        {projectsData.currentProjectId === null ?  
        <NoProject className="flex-1 p-4" setProjectsData={setProjectsData} /> : 
        projectsData.currentProjectId === 'new' ? 
        <NewProject className="flex-1 p-4" setProjectsData={setProjectsData} /> : 
        <Project className="flex-1 p-4" {...getProjectData()}/>}
      </main>
    </div>
  );
}

export default App;
