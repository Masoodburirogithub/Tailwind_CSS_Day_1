import React from 'react'

const NewHover = () => {
  return (
    <div className='max-w-[1240px] md:grid grid-cols-3 md:h-64 mx-4 my-4 md:mx-auto md:my-8 gap-3  md:gap-9'>
        <div className="col-span-1 my-7 md:my-0 h-64 bg-yellow-200  shadow-2xl rounded hover:scale-90 duration-700"><h1>First</h1></div>
        <div className="col-span-1 my-7 md:my-0 h-64 shadow-2xl rounded  hover:scale-90 duration-700 bg-gray-300"><h1>Second</h1></div>
        <div className="col-span-1 h-64 bg-blue-200  shadow-2xl rounded  hover:scale-90 duration-700"><h1>Third</h1></div>
    </div>


  )
}

export default NewHover