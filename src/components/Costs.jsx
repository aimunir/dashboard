import React from 'react'
import { DotsHorizontalIcon } from "@heroicons/react/solid";

const Costs = () => {
  return (
    <div className='w-[360px] h-[264px] bg-white rounded-xl mt-6'>
        <div>
          <div className='flex items-center justify-between'>
            <h4 className='font-bold text-sm text-gray-700 leading-5 ml-[30px] mt-[30px]  '>Costs</h4>
            <div className="drop-shadow-2xl bg-white mr-6 mt-5 py-1 px-1 rounded-md">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
          </div>

          <p className='text-4xl font-bold'>chart</p>
        </div>

    </div>
  )
}

export default Costs