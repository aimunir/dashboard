import React from 'react'
import { DotsHorizontalIcon } from "@heroicons/react/solid";


const Creativity = () => {
  return (
    <div className='drop-shadow-2xl bg-purple-600  w-[264px] h-[264px]  rounded-xl mt-6'>
         <div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-purple-300 ml-6 mt-6 ">Creativity</h4>
          </div>
          <div className="drop-shadow-2xl bg-purple-500 mr-6 mt-5  px-1 rounded-xl ">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
        </div>

        <div>
          <p className="text-4xl font-bold">chart</p>
        </div>
      </div>
        </div>
  )
}

export default Creativity