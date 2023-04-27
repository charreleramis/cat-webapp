import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cards.slice.js';


const store = configureStore({
  reducer: {
    cards: cardsSlice,
  }
});


export default store;

