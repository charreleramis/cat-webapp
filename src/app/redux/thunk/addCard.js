import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export default createAsyncThunk('card/add', async (card_name, { rejectWithValue }) => {
  try {
    const result = await Api.post('add-card', { card_name });
    return result.data;
  } catch (error) {
    return error;
  }
});