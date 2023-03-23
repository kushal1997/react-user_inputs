import "./addTask.css"
import { useState,useRef } from "react";

export const AddTask = ({tasks,setTasks}) => {
    // const [taskValue,setTaskValue]=useState("");
    const [progress,setProgress]=useState(false);
    const taskRef=useRef("");

    // const handleChange=(event) => {
    //     setTaskValue(event.target.value);
    // }
    const handleReset=()=>{
        // setTaskValue("");
        taskRef.current.value="";
        setProgress(false);
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        const task={
            id: Math.floor(Math.random()*1000000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks,task]);
        handleReset();
    }
  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskRef} />
            <select onChange={(event) =>{setProgress(event.target.value)}} value={progress}>
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
            </select>
            <span onClick={handleReset} className="reset">Reset</span>
            <button  type="submit">Add Task</button>
            
        </form>
        <p></p>
    </section>  
  )
}
