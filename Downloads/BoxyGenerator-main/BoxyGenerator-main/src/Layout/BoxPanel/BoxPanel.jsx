import React from 'react'
import { useSelector } from 'react-redux'
import BoxColorPicker from './BoxColorPicker';
import BoxRange from './BoxRange';

export default function BoxPanel() {
  const boxState = useSelector((state) => state.boxProperties);

  // On parcourt chaque box, puis ses inputs
  const boxInput = boxState.flatMap((box) =>
    box.inputs.map((input, index) => {
      if (input.type === "range") {
        return <BoxRange key={input.inputNumber} inputData={input} />;
      } else if (input.type === "color") {
        return <BoxColorPicker key={input.inputNumber} inputData={input} />;
      }
      return null;
    })
  );

  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-300">
      <p className="font-bold text-lg my-2">Box Properties</p>
      {boxInput}
    </div>
  );
}
