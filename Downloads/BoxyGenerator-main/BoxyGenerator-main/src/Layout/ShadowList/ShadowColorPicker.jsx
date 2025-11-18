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
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        {/* Champ texte affichant la valeur hex */}
        <input
          type="text"
          className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
          value={inputData.value}
          onChange={handleChange}
        />
        {/* Sélecteur de couleur */}
        <input
          type="color"
          className="cursor-pointer h-[40px]"
          value={inputData.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
