import "./addTask.css"

export const AddTask = () => {
  return (
    <section className="addtask">
        <form>
            <label htmlFor="task">Task Name:</label>
            <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" />
            <button type="submit">Add Task</button>
        </form>
    </section>  
  )
}
