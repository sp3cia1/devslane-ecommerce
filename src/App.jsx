import { useState, useEffect } from "react";
import Task from "./components/Task";
import TaskAdder from "./components/TaskAdder";

function App() {
  const defaultTasks = {
    "Practice React": false,
    "Watch Code Yogi Lecture": true,
    "Complete Next Assignment": false,
  };

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });
  const [showTaskAdder, setShowTaskAdder] = useState(false);

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskStatusChange(task) {
    setTasks((prev) => ({ ...prev, [task]: !prev[task] }));
  }

  function addTask(task){
    if (task && task.trim()) {
      setTasks((prev) => ({...prev, [task.trim()]:false}))
    }
  }

  function handleRefresh() {
    setTasks(defaultTasks);
  }
  return (
    <>
      <div className="text-4xl font-semibold py-4 px-8 md:px-16 border-b-1">MyTodo</div>
      <div className="p-8 md:p-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-4 mb-4">
          <h1 className="text-3xl font-bold">Things to get done!</h1>
          <button 
            className="bg-amber-300 p-2 text-xl rounded-md cursor-pointer text-white"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>
        <div className="">
          <h3 className="text-2xl text-start">My Incomplete Tasks</h3>
          <div className="py-4">
            {Object.keys(tasks).filter((task) => !tasks[task]).length > 0 ? (
              Object.keys(tasks)
                .filter((task) => !tasks[task])
                .map((task, id) => (
                  <Task
                    key={id}
                    task={task}
                    completed={false}
                    handleTaskStatusChange={handleTaskStatusChange}
                  />
                ))
            ) : (
              <div className="text-gray-600 text-lg px-4">
                No incomplete todos
              </div>
            )}
          </div>
        </div>
        <div className="">
          {showTaskAdder ? (
            <TaskAdder setShowTaskAdder={setShowTaskAdder} addTask={addTask} />
          ) : (
            <button className="bg-amber-300 p-2 text-xl rounded-md my-2 cursor-pointer text-white" onClick={() => setShowTaskAdder(true)}>
              +Add a Todo
            </button>
          )}
        </div>
        <div>
          <h3 className="text-2xl text-start">My Completed Tasks</h3>
          <div className="py-4">
            {Object.keys(tasks).filter((task) => tasks[task]).length > 0 ? (
              Object.keys(tasks)
                .filter((task) => tasks[task])
                .map((task, id) => (
                  <Task
                    key={id}
                    task={task}
                    completed={true}
                    handleTaskStatusChange={handleTaskStatusChange}
                  />
                ))
            ) : (
              <div className="text-gray-600 text-lg px-4">
                No completed todos
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
