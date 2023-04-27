import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export default createAsyncThunk('card/status', async ({ id, status}, { rejectWithValue }) => {
  try {
    const result = await Api.post('update-status', { id, status });
    return result.data;
  } catch (error) {
    return error;
  }
});