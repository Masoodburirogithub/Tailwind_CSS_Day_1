import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [toggle,setToggle] = useState(false);

  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] py-[10px]  mx-auto justify-between flex items-center  '>
            <div className=' text-white '>
                <h4 className='text-2xl font-bold'>WebName</h4>
            </div>
            <div className=''>
            {    toggle?
                <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block text-2xl text-white font-bold'/>
                :

                <AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden block text-2xl text-white font-bold'/>
            }
            
            
                <ul className='hidden md:flex gap-5 text-white '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Details</li>
                    <li>Apply</li>
                </ul>

                {/* responsive menu */}
                {/* <ul className={' md:hidden fixed bg-black  w-full h-screen  text-white top-[85px]  '}>
                    <li className='p-3 text-xl' >Home</li>
                    <li className='p-3 text-xl'>About</li>
                    <li className='p-3 text-xl'>Contact</li>
                    <li className='p-3 text-xl'>Details</li>
                    <li className='p-3 text-xl'>Apply</li>
                </ul> */}
        </div>
      </div>
      </div>
  )}
    

export default Header