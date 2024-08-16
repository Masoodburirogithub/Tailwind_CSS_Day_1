import React from 'react'
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className='w-full h-[500px] bg-[#2699fb] py-[100px] text-center'>
        <div className="max-w-[1240px] m-auto">
            <div className="text-2xl md:text-3xl ">Learn With Us</div>
            <h2 className='text-white text-4xl md:text-5xl py-[15px]'>Learn With Us</h2>
            <ReactTyped className='text:3xl md:text-4xl'
            startWhenVisible
            strings={[
            "Webdevelopment Course .","We Serve For You.", "Let's Start."
             ]}
            // typeSpeed={100}
            loop={true}
            // backSpeed={30}
              />
            
        </div>
    </div>
  )
}

export default Banner