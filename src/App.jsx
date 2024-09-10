import NewProject from './components/NewProject';
import NoProject from './components/NoProject';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [addProject, setAddProject] = useState(false);

  return (
    <div className="h-screen w-3/6 mx-auto">
      <main className="flex mt-10">
        <Sidebar className="bg-amber-800 w-64 h-screen p-4 rounded-r-lg" projects={['Project 1', 'Project 2', 'Project 3']} setAddProject={setAddProject} />
        {addProject ? <NewProject className="flex-1 p-4" setAddProject={setAddProject} /> : <NoProject className="flex-1 p-4" setAddProject={setAddProject} />}
      </main>
    </div>
  );
}

export default App;
