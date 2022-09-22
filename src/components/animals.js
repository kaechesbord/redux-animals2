import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  animals: {
    animalDescription: []
  }
}

export const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addAnimals: (state, action) => {
        state.animals.animalDescription = action.payload
    }
  }
})


export const { addAnimals } = animalsSlice.actions

export default animalsSlice.reducer