import React from 'react'

function Footer() {
  return (
    <footer className='py-6 px-8 bg-white border-t border-gray-100'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
            <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
            </svg>
          </div>
          <span className='text-sm text-gray-600 font-medium'>
            Boxy Generator © {new Date().getFullYear()}
          </span>
        </div>
        <div className='flex items-center gap-6'>
          <span className='text-sm text-gray-500'>
            Made with <span className='text-red-500'>♥</span> by{' '}
            <a
              href="https://github.com/issouf14-DEV"
              target="_blank"
              rel="noopener noreferrer"
              className='text-blue-600 hover:text-purple-600 font-medium transition-colors'
            >
              FOFANA ISSOUF
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;