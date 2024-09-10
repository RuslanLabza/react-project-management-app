import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [projectsData, setProjectsData] = useState({
    projects: [],
    tasks: [],
    currentProjectId: null,
  });

  const getProjectData = () => {
    const project = projectsData.projects.find(
      (project) => project.id === projectsData.currentProjectId,
    );
    return project;
  };

  const onDeleteProject = () => {
    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      currentProjectId: null,
      projects: previousProjectsData.projects.filter(
        (project) => project.id !== previousProjectsData.currentProjectId,
      ),
    }));
  };

  const onSelectProject = (projectId) => {
    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      currentProjectId: projectId,
    }));
  };

  const onCreateProject = (title, description, dueDate) => {
    const projectId = Math.random() * 1000000;

    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      currentProjectId: projectId,
      projects: [
        ...previousProjectsData.projects,
        {
          id: projectId,
          title,
          description,
          dueDate,
        },
      ],
    }));
  };

  const onCreateNewProjectPage = () => {
    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      currentProjectId: "new",
    }));
  };

  const onCancelProjectCreation = () => {
    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      currentProjectId: null,
    }));
  };

  const getTasksForProject = () => {
    return projectsData.tasks.filter(
      (task) => task.projectId === projectsData.currentProjectId,
    );
  };

  const onAddTask = (task) => {
    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      tasks: [
        ...previousProjectsData.tasks,
        {
          id: Math.random() * 1000000,
          projectId: previousProjectsData.currentProjectId,
          title: task,
        },
      ],
    }));
  };

  const onDeleteTask = (taskId) => {
    setProjectsData((previousProjectsData) => ({
      ...previousProjectsData,
      tasks: previousProjectsData.tasks.filter((task) => task.id !== taskId),
    }));
  };

  return (
    <div className="h-screen w-3/6 mx-auto">
      <main className="flex mt-10">
        <Sidebar
          className="bg-amber-800 w-64 h-screen p-4 rounded-r-lg"
          projectsData={projectsData}
          onCreateNewProjectPage={onCreateNewProjectPage}
          onSelectProject={onSelectProject}
        />
        {projectsData.currentProjectId === null ? (
          <NoProject
            className="flex-1 p-4"
            onCreateNewProjectPage={onCreateNewProjectPage}
          />
        ) : projectsData.currentProjectId === "new" ? (
          <NewProject
            className="flex-1 p-4"
            setProjectsData={setProjectsData}
            onCreateProject={onCreateProject}
            onCancelProjectCreation={onCancelProjectCreation}
          />
        ) : (
          <Project
            className="flex-1 p-4"
            onDelete={onDeleteProject}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
            tasks={getTasksForProject()}
            {...getProjectData()}
          />
        )}
      </main>
    </div>
  );
}

export default App;
