import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export default createAsyncThunk('card/update', async ({ id, card_name}, { rejectWithValue }) => {
  try {
    const result = await Api.post('update-card', { id, card_name });
    return result.data;
  } catch (error) {
    return error;
  }
});