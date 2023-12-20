import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFaculties = createAsyncThunk(
  "institute-members-details/getFaculty",
  async () => {
    const response = await axios.get(
      "http://ec2-65-0-92-91.ap-south-1.compute.amazonaws.com:4000/api/v1/institute-members-details/getFaculty"
    );
    const data = await response.data;
    return data;
  }
);

const initialState = {
  entities: [],
} as any;

const facultySlice = createSlice({
  name: "Faculty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFaculties.fulfilled, (state, action) => {
      state.entities.push(...action.payload.data);
    });
  },
});

export default facultySlice.reducer;
