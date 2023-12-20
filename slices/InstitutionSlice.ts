import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk("course/getAllCourses", async () => {
  const response = await axios.get(
    "http://ec2-65-0-92-91.ap-south-1.compute.amazonaws.com:4000/api/v1/course/getAllCourses"
  );
  const data = await response.data;
  return data;
});

const initialState = {
  entities: [],
} as any;

const courseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.entities.push(...action.payload.data);
    });
  },
});

export default courseSlice.reducer;
