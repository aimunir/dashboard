import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'

const Usage = () => {
  return (
    <div className='drop-shadow-2xl bg-gray-100 w-[48%] h-[48%]] rounded-xl ml-8 mr-6'> 
    
    <div>
      <div className='flex justify-between '>
      <h4 className='text-[15px] font-bold text-gray-500 mt-8 ml-8 '>Usage Yesterday, 24 June</h4>

{/* slider  */}
<div className='mt-8 mr-8 flex gap-2'>
<div className='w-7 h-7 bg-gray-50 drop-shadow-2xl rounded-md'>

  <ChevronLeftIcon className='text-gray-200'  />
</div>

<div className='bg-gray-50 drop-shadow-2xl rounded-md px-3 text-[10px] flex items-center justify-center font-bold '>
  <p className='text-gray-500  ' >Today</p>
</div>

<div className='w-7 h-7 bg-gray-50 drop-shadow-2xl rounded-md'>
  <ChevronRightIcon className='text-gray-200' />
</div>

</div>

{/* slider end   */}

      </div>
    

    <p className='text-[30px] font-bold leading-10 text-gray-700 ml-8 mt-3'>7 h 34 min</p>
      
    </div>
    
    
    </div>
  )
}

export default Usage