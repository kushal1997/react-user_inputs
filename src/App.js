import { useState } from 'react';
import { Task } from './components/Task';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';

import './App.css';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record Videos", completed: false },
    { id: 2, name: "Listem Music", completed: true },
    { id: 3, name: "Study", completed: false }
  ]);
  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Task tasks={tasks} setTasks={setTasks} />
      </main>

      <Footer />
    </div>
  );
}
export default App;
