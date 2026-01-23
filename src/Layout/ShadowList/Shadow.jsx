import React from 'react'
import { useState, useEffect } from 'react'
import Chevron from "../../assets/chevron.svg";
import ShadowColorPicker from './ShadowColorPicker';
import ShadowRange from './ShadowRange';
import ShadowCheckbox from './ShadowCheckbox';
import { removeShadow } from '../../features/Shadow';
import { useDispatch } from 'react-redux';

export default function Shadow({ PannelNumber, shadow }) {
  const dispatch = useDispatch();
  const [toggleShadow, setToggleShadow] = useState(false);

  useEffect(() => {
    if (PannelNumber === 1) {
      setToggleShadow(true);
    }
  }, [PannelNumber]);

  const shadowInputs = shadow.inputs.map((input) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={input.inputNumber}
          inputData={input}
          shadowID={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={input.inputNumber}
          inputData={input}
          shadowID={shadow.id}
        />
      );
    }
    return null;
  });

  return (
    <li className='bg-white'>
      {/* Shadow Header */}
      <button
        onClick={() => setToggleShadow(!toggleShadow)}
        className='w-full px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors'
      >
        <div className='flex items-center gap-3'>
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${shadow.active
              ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
              : 'bg-gray-200 text-gray-500'
            }`}>
            {PannelNumber}
          </span>
          <span className='font-semibold text-gray-700'>Shadow {PannelNumber}</span>
          {shadow.inset && (
            <span className='px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded-full'>
              inset
            </span>
          )}
          {!shadow.active && (
            <span className='px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-500 rounded-full'>
              disabled
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${toggleShadow ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {/* Shadow Content */}
      <div className={`overflow-hidden transition-all duration-300 ${toggleShadow ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='px-5 py-4 bg-gray-50 border-t border-gray-100'>
          {/* Controls */}
          <div className='flex items-center justify-between mb-4 pb-4 border-b border-gray-200'>
            <div className='flex items-center gap-4'>
              <ShadowCheckbox name={"active"} shadowID={shadow.id} />
              <ShadowCheckbox name={"inset"} shadowID={shadow.id} />
            </div>
            <button
              onClick={() => dispatch(removeShadow(shadow.id))}
              className='flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
              </svg>
              Remove
            </button>
          </div>

          {/* Inputs */}
          <div className='space-y-1'>
            {shadowInputs}
          </div>
        </div>
      </div>
    </li>
  );
}
