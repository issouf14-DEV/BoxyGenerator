import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addShadow } from '../../features/Shadow';
import Shadow from './Shadow';

export default function ShadowList() {
  const dispatch = useDispatch();
  const shadows = useSelector((state) => state.Shadow);

  return (
    <div>
      {/* Header */}
      <div className='flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100'>
        <div>
          <p className='font-bold text-gray-800'>Shadow Layers</p>
          <p className='text-xs text-gray-500 mt-0.5'>{shadows.length} shadow{shadows.length > 1 ? 's' : ''} active</p>
        </div>
        <button
          onClick={() => dispatch(addShadow())}
          className='flex items-center gap-2 py-2 px-4 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5'
        >
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
          </svg>
          Add Shadow
        </button>
      </div>

      {/* Shadow List */}
      <ul className='divide-y divide-gray-100'>
        {shadows.map((shadow, index) => (
          <Shadow
            key={shadow.id}
            PannelNumber={index + 1}
            shadow={shadow}
          />
        ))}
      </ul>

      {/* Empty State */}
      {shadows.length === 0 && (
        <div className='p-8 text-center'>
          <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center'>
            <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
            </svg>
          </div>
          <p className='text-gray-500 font-medium'>No shadows yet</p>
          <p className='text-sm text-gray-400 mt-1'>Click "Add Shadow" to get started</p>
        </div>
      )}
    </div>
  );
}
