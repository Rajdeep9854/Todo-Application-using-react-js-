import React from 'react'

function Todos({value,id,deleteTask}) {
  const deleteTask1=(e)=>{
    //console.log(e.target.id);
    deleteTask(e.target.id);
  }
  return (
      <div className='text-white 
      relative flex items-center justify-center
      w-3/6 h-16 rounded-full
      bg-red-600 
      mx-auto my-4
       '>
        <h1 className='text-2xl font-bold w-5/6 mx-3' id={id}>{value} {id}</h1>
        <button 
        className='w-2/6 h-full border-spacing-1 
        text-xl font-semibold border-4 bg- rounded-full'
        onClick={deleteTask1}
        id={id}
        >Delete Task</button>
    </div>
  )
}

export default Todos

//rfce