import React from 'react'
import { useState,useEffect } from 'react'
import Chevron from "../../assets/chevron.svg";
import ShadowColorPicker from './ShadowColorPicker';
import ShadowRange from './ShadowRange';
import ShadowCheckbox from './ShadowCheckbox';
import { removeShadow } from '../../features/Shadow';
import { useDispatch,useSelector } from 'react-redux';

export default function Shadow({PannelNumber, shadow}) {
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
    <li className='bg-gray-50 border-gray-3 border-b'>
      <button
      
      
      onClick={() => setToggleShadow(!toggleShadow)} className='px-6 py-4 flex justify-between items-center hover:bg-gray-100 w-full'>
        <span>Shadow {PannelNumber} </span>
        <img
          className='font-bold w-5'
          src={Chevron}
          alt="#"
          style={{
            transform: toggleShadow ? "rotate(0deg)" : "rotate(180deg)"
          }}
        />
      </button>

      {toggleShadow && (
        <>
          <div className='flex items-end px-6 pt-4'>
            {/* <Checkbox/> */}
            <ShadowCheckbox name={"active"} shadowID={shadow.id}/>  
            <ShadowCheckbox name={"inset"} shadowID={shadow.id}/>  
            <button 
              onClick={() =>dispatch(removeShadow(shadow.id))}
            className='ml-auto text-sm bg-red-600 hover:bg-red-700 py-1 px-3 rounded text-white'>
              Remove
            </button>
          </div>
          <div className='px-6 py-4'>
          {shadowInputs}
          </div>
        </>
      )}
    </li>
  );
}
