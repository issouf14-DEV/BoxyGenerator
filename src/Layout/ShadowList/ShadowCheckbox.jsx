import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCheckbox } from '../../features/Shadow'

export default function ShadowCheckbox({ name, shadowID }) {
  const dispatch = useDispatch()
  
  // Sélection de la valeur du checkbox
  const checkboxValue = useSelector(state => {
    const shadow = state.Shadow?.find(shadow => shadow.id === shadowID)
    console.log('Shadow trouvée:', shadow) // Debug
    console.log('Valeur pour', name, ':', shadow?.[name]) // Debug
    return shadow?.[name] || false
  })
  
  const handleChange = () => {
    console.log('Dispatch updateCheckbox:', { shadowID, name }) // Debug
    dispatch(updateCheckbox({ shadowID, name }))
  }

  return (
    <>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={checkboxValue}
        id={`checkbox-${name}-${shadowID}`}
        className="h-4 w-4 border-gray-300 rounded mr-2 focus:ring-2 focus:ring-blue-500"
      />
      <label
        className="leading-4 mr-5 cursor-pointer"
        htmlFor={`checkbox-${name}-${shadowID}`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  )
}