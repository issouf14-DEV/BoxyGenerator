import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// État initial
const initialState = [
  {
    id: nanoid(8),
    inset: false,
    active: true,
    inputs: [
      {
        inputNumber: 1,
        name: "Décalage horizontal",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Décalage vertical",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Rayon de flou",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Rayon d'expansion",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Couleur",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const ShadowSlice = createSlice({
  name: "Shadow",
  initialState,
  reducers: {
    // Supprimer une ombre par ID
removeShadow: (state, action) => {
  const shadowIndexToRemove = state.findIndex(
    (shadow) => shadow.id === action.payload
  );
  if (shadowIndexToRemove !== -1) {
    state.splice(shadowIndexToRemove, 1);
  }
},

    // Ajouter une nouvelle ombre
    addShadow: (state) => {
      state.push({
        id: nanoid(8),
        inset: false,
        active: true,
        inputs: [
          {
            inputNumber: 1,
            name: "Décalage horizontal",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "Décalage vertical",
            value: 10,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Rayon de flou",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Rayon d'expansion",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Couleur",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },

    // Modifier un input précis dans une ombre
    updateShadowvalue: (state, action) => {
      const { shadowID, inputNumber, value } = action.payload;

      const currentShadow = state.find((shadow) => shadow.id === shadowID);
      if (!currentShadow) return;

      const currentInput = currentShadow.inputs.find(
        (input) => input.inputNumber === Number(inputNumber)
      );
      if (!currentInput) return;

      currentInput.value = value;
    },

    // Modifier un booléen comme "inset" ou "active"
    updateCheckbox: (state, action) => {
      const { shadowID, name } = action.payload;

      const currentShadow = state.find((shadow) => shadow.id === shadowID);
      if (!currentShadow) return;

      // Vérifier si la propriété existe avant de l'inverser
      if (currentShadow.hasOwnProperty(name)) {
        currentShadow[name] = !currentShadow[name];
      }
    },
  },
});

export const { addShadow, updateShadowvalue, updateCheckbox, removeShadow } =
  ShadowSlice.actions;

export default ShadowSlice.reducer;
