import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBoxvalue } from '../../features/boxProperties'
export default function BoxColorPicker({inputData}) {
   const dispatch = useDispatch()
   function handleChange(e){
    dispatch(updateBoxvalue({inputNumber:inputData.inputNumber,value:e.target.value}))
   }
  
  return (
    <div className='mt-3 '>
      <p>{inputData.name}</p>
      <div className='flex mt-2'>
        <input type="text" className='flex-grow border py-1 px-2 focus :outline-1 outline-gray-400'
      value={inputData.value}
      onChange={handleChange}

        
        />
        <input type="color" className='cursor-pointer h-[40px]'
      value={inputData.value}
      onChange={handleChange}


        
        />

      </div>

    </div>
  )
}
