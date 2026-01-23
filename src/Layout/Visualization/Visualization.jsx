import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import getBoxShadowValue from '../../utils/getBoxShadowValue';

export default function Visualization() {
  const [copied, setCopied] = useState(false);

  // Get states from Redux
  const shadows = useSelector((state) => state.Shadow);
  const boxProperties = useSelector((state) => state.boxProperties);

  // Extract box properties
  const borderRadius = boxProperties[0]?.inputs.find(i => i.inputNumber === 1)?.value || 0;
  const height = boxProperties[0]?.inputs.find(i => i.inputNumber === 2)?.value || 250;
  const width = boxProperties[0]?.inputs.find(i => i.inputNumber === 3)?.value || 250;
  const backgroundColor = boxProperties[0]?.inputs.find(i => i.inputNumber === 4)?.value || '#fff';

  // Get the box-shadow value
  const boxShadow = getBoxShadowValue(shadows);

  // Generate CSS code
  const cssCode = `width: ${width}px;
height: ${height}px;
border-radius: ${borderRadius}px;
background-color: ${backgroundColor};
box-shadow: ${boxShadow};`;

  // Copy CSS to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="w-full max-w-2xl flex flex-col items-center p-8">
      {/* Preview Area */}
      <div className="w-full bg-white p-8 rounded-2xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
          Live Preview
        </h2>

        {/* Preview Box Container */}
        <div className="relative min-h-[350px] flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 overflow-hidden">
          {/* Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          ></div>

          {/* The Customizable Box */}
          <div
            className="relative z-10 transition-all duration-300 ease-out"
            style={{
              width: `${Math.min(width, 400)}px`,
              height: `${Math.min(height, 300)}px`,
              borderRadius: `${borderRadius}px`,
              backgroundColor: backgroundColor,
              boxShadow: boxShadow,
            }}
          />
        </div>
      </div>

      {/* CSS Code Output */}
      <div className="w-full bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex justify-between items-center px-5 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-gray-400 text-sm font-medium ml-2">CSS</span>
          </div>
          <button
            onClick={handleCopy}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
              ${copied
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy CSS
              </>
            )}
          </button>
        </div>
        <pre className="p-5 text-sm text-gray-300 font-mono overflow-x-auto">
          <code>{cssCode}</code>
        </pre>
      </div>
    </div>
  );
}