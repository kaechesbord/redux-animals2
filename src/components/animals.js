import { createSlice } from '@reduxjs/toolkit'
import axios  from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const initialState = {
  animals: {
    animalDescription: [],
    isLoading: true
  },
}

export const fetchData = createAsyncThunk(
  "animals",
  () => {
    return axios.get(("https://zoo-animal-api.herokuapp.com/animals/rand/10"))
    .then((response) => response.data)
    .catch((error) => error);
  }
) 
export const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addAnimals: (state, action) => {
        state.animals.animalDescription = action.payload
    },
    isLoading:(state, action) => {
        state.animals.isLoading = action.payload
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.animals.animalDescription = action.payload;
      state.animals.isLoading = false;
    }
  }
}
)



export const { addAnimals, isLoading } = animalsSlice.actions

export default animalsSlice.reducer
