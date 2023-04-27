import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export default createAsyncThunk('card/delete', async (id, { rejectWithValue }) => {
  try {
    const result = await Api.post('delete-card', { id });
    return result.data;
  } catch (error) {
    return error;
  }
});