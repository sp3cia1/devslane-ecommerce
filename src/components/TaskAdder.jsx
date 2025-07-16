import { useState } from "react"

export default function TaskAdder({setShowTaskAdder, addTask}){
  const [task, setTask] = useState("")
  console.log(task)
  const handleTaskChange = (e) => {
    setTask(e.target.value)
  }
  return(
    <div className="shadow-lg p-4 flex flex-col gap-3 self-center max-w-96 mb-4">
      <h3 className="text-lg font-semibold">Create a Todo</h3>
      <input value={task} onChange={handleTaskChange} type="text" placeholder="Write your todo here" className="p-3 rounded-md max-w-96 border border-black "/>
      <div>
        <button 
          onClick={() => {
            if (task.trim()) {
              addTask(task); 
              setTask("");
            }
          }} 
          className="bg-amber-400 text-white py-2 px-4 text-lg rounded-md mr-3 cursor-pointer"
        >
          Save
        </button>
        <button onClick={() => {setShowTaskAdder(false)}} className="bg-white text-black border border-black py-2 px-4 text-lg rounded-md mr-3 cursor-pointer">Cancel</button>
      </div>
    </div>
  )
}