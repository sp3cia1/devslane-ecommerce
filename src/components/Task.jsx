export default function Task({task, completed, handleTaskStatusChange}){
  return(
    <div className="flex my-2">
    <input id={task} type="checkbox" checked={completed} className="w-16 cursor-pointer" onChange={() => handleTaskStatusChange(task)} />
      
      <label htmlFor="task" className="text-lg">
        {task}
      </label>
    </div>
  )
} 