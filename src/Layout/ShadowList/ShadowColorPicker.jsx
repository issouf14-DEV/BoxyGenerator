import React from "react";
import { useDispatch } from "react-redux";
import { updateShadowvalue } from "../../features/Shadow";

export default function ShadowColorPicker({ inputData, shadowID }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(
      updateShadowvalue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowID,
      })
    );
  }

  return (
    <div className="py-3">
      <label className="block text-sm font-medium text-gray-700 mb-2">{inputData.name}</label>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow h-10 border border-gray-200 rounded-lg px-3 text-sm font-mono text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          value={inputData.value}
          onChange={handleChange}
          placeholder="#000000"
        />
        <input
          type="color"
          className="w-12 h-10 rounded-lg cursor-pointer"
          value={inputData.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
