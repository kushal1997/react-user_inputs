import { useState } from "react";
import { TaskCard } from "./TaskCard";

import "./task.css"

export const Task = ({tasks,setTasks}) => {
  
  const [show, setShow] = useState(true);
function handleDelete(id) {
  setTasks(tasks.filter(task => id !== task.id));

}

return (
  <section className="taskList">
    <ul>
      <div className="head">
      <h1>Task List</h1>
      <button className="trigger" onClick={() => setShow(!show)}>{show?"Hide Task":"Show Task"}</button>
      </div>
      {
        show && tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))
      }

    </ul>
    
  </section>
)
}
