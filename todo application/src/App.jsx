import { useState } from "react"
import Todos from "./component/Todos";

function App() {
  const [input1,setInput1]=useState('')
  const [tasks,setTasks] =useState([]);
  
  function changeInput(e){
    setInput1(e.target.value)
    //console.log(input1);
  }
  function addtask(){
    setTasks([...tasks,input1])
    console.log(tasks);
  }

  return (
    <>
      <div className='h-screen w-full bg-black '>
        <div className="Images relative flex items-center justify-center ">
        <h1 className="text-white">Image</h1>
        </div>

        <div className="relative flex items-center justify-center p-1 mt-10">
          <div className="text-white text-3xl bg-red-600 h-20 w-3/6 relative flex items-center justify-center">
            <h1 className="font-extrabold ">Add Your Notes Here </h1>
          </div>
        </div>

        <div className=" relative flex items-center justify-center  h-20 w-3/6 mx-auto ">
          <input type="text" className="w-3/5 p-2 
          border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={input1}
          onChange={(e)=> changeInput(e)} id="1"
          />
          <button 
          className=" w-2/5 bg-red-600 text-white text-xl font-bold px-4 py-2 rounded "
          onClick={addtask}
          >Add Task</button>
       </div>
        <div >
          {
            tasks.map((value,ind)=>{
              return (<Todos value={value} id={ind} />)
            })
          }
        </div>
       
      </div>
    </>
  )
}

export default App
