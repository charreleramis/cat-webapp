import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cards: [],
    loading: false,
    error: null,
}

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    clearRedux: (state, action) => {
      return initialState;
    },

  }
});


export default cardSlice.reducer;
