import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCheckbox } from '../../features/Shadow'

export default function ShadowCheckbox({ name, shadowID }) {
  const dispatch = useDispatch()

  const checkboxValue = useSelector(state => {
    const shadow = state.Shadow?.find(shadow => shadow.id === shadowID)
    return shadow?.[name] || false
  })

  const handleChange = () => {
    dispatch(updateCheckbox({ shadowID, name }))
  }

  return (
    <label
      htmlFor={`checkbox-${name}-${shadowID}`}
      className='flex items-center gap-2 cursor-pointer group'
    >
      <input
        onChange={handleChange}
        type="checkbox"
        checked={checkboxValue}
        id={`checkbox-${name}-${shadowID}`}
        className="h-4 w-4"
      />
      <span className='text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors capitalize'>
        {name}
      </span>
    </label>
  )
}