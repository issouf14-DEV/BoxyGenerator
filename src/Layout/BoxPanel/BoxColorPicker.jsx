import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBoxvalue } from '../../features/boxProperties'

export default function BoxColorPicker({ inputData }) {
  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(updateBoxvalue({ inputNumber: inputData.inputNumber, value: e.target.value }))
  }

  return (
    <div className='py-4'>
      <label className='block text-sm font-medium text-gray-700 mb-3'>{inputData.name}</label>
      <div className='flex gap-2'>
        <input
          type="text"
          className='flex-grow h-10 border border-gray-200 rounded-lg px-3 text-sm font-mono text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
          value={inputData.value}
          onChange={handleChange}
          placeholder="#ffffff"
        />
        <input
          type="color"
          className='w-12 h-10 rounded-lg cursor-pointer'
          value={inputData.value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
