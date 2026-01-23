import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBoxvalue } from '../../features/boxProperties'

export default function BoxRange({ inputData }) {
  const dispatch = useDispatch()

  function handleChange(e) {
    let value = e.target.value;
    if (inputData.type === "range" || e.target.type === "number") {
      value = Number(value);
    }
    dispatch(updateBoxvalue({
      inputNumber: inputData.inputNumber,
      value
    }));
  }

  return (
    <div className='py-4'>
      <div className='flex justify-between items-center mb-3'>
        <label className='text-sm font-medium text-gray-700'>{inputData.name}</label>
        <div className='flex items-center gap-1'>
          <input
            type="number"
            className='w-16 h-8 text-sm border border-gray-200 rounded-lg text-center font-medium text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
            value={inputData.value}
            onChange={handleChange}
            min={inputData.minMax[0]}
            max={inputData.minMax[1]}
          />
          <span className='text-xs text-gray-400 font-medium'>px</span>
        </div>
      </div>

      <div className='relative'>
        <input
          type="range"
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          value={inputData.value}
          onChange={handleChange}
          className='w-full h-2 rounded-lg cursor-pointer'
        />
        {/* Center marker for ranges with negative values */}
        {inputData.minMax[0] < 0 && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-300 rounded pointer-events-none'></div>
        )}
      </div>
    </div>
  )
}
