import React from 'react'

const NewLetter = () => {
  return (
  
    <>
        <div className="w-full bg-[#2699fb] md:h-52 flex flex-col">
            <div className=" max-w-[1240px]  mx-auto h-full flex flex-col md:grid grid-cols-3 items-center">
                <div className=" col-span-1 max-w-[500px]">
                    <p className='text-3xl text-white'>Want to Learn new Skills in I.T Dept.</p>
                    <p className='text-white p-2'>SignUp in NewsLetter to be aware from Everything.</p>
                </div>
                <div className="col-span-1"></div>
                <div className=" col-span-1 max-w-600px">
                    <div className="py-3 text-center">
                        <input className='p-2  rounded md:px-8' type="email" placeholder='Enter Email' id="" />
                        <input className='p-2 rounded bg-black mx-4 text-white px-6' type="button" value="Notify Me" />
                    </div>
                    <p className='text-xl text-white'>We are here to protect you and Safe.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </>
  
  )
}

export default NewLetter