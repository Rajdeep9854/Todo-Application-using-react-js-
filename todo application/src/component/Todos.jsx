import React from 'react'

function Todos({value,id}) {
  return (
      <div className='text-white 
      relative flex items-center justify-center
      w-3/6 h-16
      bg-red-600 
      mx-auto my-4
       '>
        <h1 className='text-2xl font-bold' id={id}>{value} {id}</h1>
    </div>
  )
}

export default Todos

//rfce