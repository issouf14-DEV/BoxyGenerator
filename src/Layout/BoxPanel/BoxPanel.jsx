import React from 'react'
import { useSelector } from 'react-redux'
import BoxColorPicker from './BoxColorPicker';
import BoxRange from './BoxRange';

export default function BoxPanel() {
  const boxState = useSelector((state) => state.boxProperties);

  const boxInput = boxState.flatMap((box) =>
    box.inputs.map((input) => {
      if (input.type === "range") {
        return <BoxRange key={input.inputNumber} inputData={input} />;
      } else if (input.type === "color") {
        return <BoxColorPicker key={input.inputNumber} inputData={input} />;
      }
      return null;
    })
  );

  return (
    <div className="p-5">
      {/* Header */}
      <div className='flex items-center gap-2 mb-6 pb-4 border-b border-gray-100'>
        <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center'>
          <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
          </svg>
        </div>
        <div>
          <p className='font-bold text-gray-800'>Box Properties</p>
          <p className='text-xs text-gray-500'>Customize size, radius & color</p>
        </div>
      </div>

      {/* Properties */}
      <div className='space-y-1'>
        {boxInput}
      </div>
    </div>
  );
}
