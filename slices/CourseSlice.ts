import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInstitutes = createAsyncThunk(
  "course/getAllCourses",
  async () => {
    const response = await axios.get(
      "http://ec2-65-0-92-91.ap-south-1.compute.amazonaws.com:4000/api/v1/institute/getAllInstitutes"
    );
    const data = await response.data;
    return data;
  }
);

const initialState = {
  entities: [],
} as any;

const instituteSlice = createSlice({
  name: "Institute",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInstitutes.fulfilled, (state, action) => {
      state.entities.push(...action.payload.data);
    });
  },
});

export default instituteSlice.reducer;
