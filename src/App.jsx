import Table from './components/Table'
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(2)
  const [num2, setNum2] = useState(2)
  
  function increaseNum1(){
    setNum1(num1 + 1)
  }
  
  function increaseNum2(){
    setNum2(num2+ 1)
  }
  
  return (
    <div className="p-8 flex gap-8">
       <div>
         <button className="rounded bg-blue-700 px-4 py-2 text-white " onClick={increaseNum1}>Next</button>
        <Table num={num1}/>
      </div>
      
      <div>
        <button className="rounded bg-blue-700 px-4 py-2 text-white " onClick={increaseNum2}>Next</button>
        <Table num={num2}/>
      </div>
    </div>
  );
}

export default App;
