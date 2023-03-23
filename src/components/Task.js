import { useState } from "react";
import { TaskCard } from "./TaskCard";

import "./task.css"

export const Task = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record Videos", completed: false },
    { id: 2, name: "Listem Music", completed: true },
    { id: 3, name: "Study", completed: false }
  ]);
  const [show, setShow] = useState(true);
  const styles = {
    color: "red",
    border: "2px solid",
        // ======================
        // DYNAMIC INLINE LEVEL STYLING
        // ======================
    
    borderColor: show? "green":"red",
    padding: "20px"
}

function handleDelete(id) {
  setTasks(tasks.filter(task => id !== task.id));

}

return (
  <section className="taskList">
    {/* ======================
    INLINE LEVEL STYLING
    ====================== */}
    <h1 style={
      styles
    }>Task List</h1>
    <ul>
      <button onClick={() => setShow(!show)}>{show?"Hide":"Show"}</button>
      {
        show && tasks.map((task) => (
          <TaskCard info={info} key={task.id} task={task} handleDelete={handleDelete} />
        ))
      }

    </ul>
    
  </section>
)
}
