import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchScholarShip = createAsyncThunk(
  "scholarship/getAllScholarship",
  async () => {
    const response = await axios.get(
      "http://ec2-65-0-92-91.ap-south-1.compute.amazonaws.com:4000/api/v1/scholarship/getAllScholarships"
    );
    const data = await response.data;
    return data;
  }
);



const initialState = {
  entities: [],
} as any;

const scholarShipSlice = createSlice({
  name: "scholarship",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScholarShip.fulfilled, (state, action) => {
      state.entities.push(...action.payload.data);
    });
  },
});

export default scholarShipSlice.reducer;
