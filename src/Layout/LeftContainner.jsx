import React from 'react'
import { useState } from 'react'
import ShadowList from './ShadowList/ShadowList'
import BoxPanel from './BoxPanel/BoxPanel'

export default function LeftContainner() {
  const [tabs, setTabs] = useState(0)
  const tabsList = [
    {
      name: 'Shadows',
      icon: (
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
        </svg>
      ),
      component: <ShadowList />
    },
    {
      name: 'Box',
      icon: (
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
        </svg>
      ),
      component: <BoxPanel />
    }
  ]

  return (
    <div className="relative mt-16 w-full max-w-[550px] h-[600px] rounded-2xl shadow-xl bg-white overflow-hidden md:mt-0">
      {/* Tab Navigation */}
      <div className="flex bg-gray-50 border-b border-gray-200">
        {tabsList.map((tab, index) => (
          <button
            key={index}
            onClick={() => setTabs(index)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold text-sm transition-all duration-300 relative
              ${tabs === index
                ? 'text-blue-600 bg-white'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
          >
            {tab.icon}
            {tab.name}
            {tabs === index && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='overflow-auto h-[calc(100%-57px)]'>
        {tabsList[tabs].component}
      </div>
    </div>
  );
}