import React from 'react'

const Page1 = () => {
  return (
    <div className="max-w-[1240px] my-5 md:h-56 mx-auto md:grid grid-cols-2">
    <div className='col-span-1'>
      <img className="  w-[337px] mx-auto" src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg" alt="" />
    </div>
    <div className=" col-span-1">
      <p className='text-2xl text-orange-500 py-2'>Learn from Description</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ad doloribus molestias est. Voluptate quam doloribus asperiores aut facere tempore nam! Aspernatur dolorem vitae corrupti nostrum temporibus delectus consectetur excepturi?</p>
      <input className='bg-black text-white p-2 rounded px-8 my-2' type="button" value="Learn more" />
    </div>

    </div>


  )
}

export default Page1