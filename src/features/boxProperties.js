import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = [
  {
    id: nanoid(8),
    inset: false,
    active: true,
    inputs: [
      {
        inputNumber: 1,
        name: "Border radius",
        value: 0,
        slice: "boxProperties",
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Height",
        value: 250,
        type: "range",
        minMax: [0, 500],
      },
      {
        inputNumber: 3,
        name: "Width",
        value: 250,
        type: "range",
        minMax: [0, 500],
      },
      {
        inputNumber: 4,
        name: "Background color",
        value: "#fff",
        type: "color",
        minMax: [-250, 250],
      },
    ],
  },
];

export const boxSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxvalue: (state, action) => {
      for (const block of state) {
        const input = block.inputs.find(
          (i) => i.inputNumber === action.payload.inputNumber
        );
        if (input) {
          input.value = action.payload.value;
          break;
        }
      }
    },
  },
});

export const { updateBoxvalue } = boxSlice.actions
export default boxSlice.reducer