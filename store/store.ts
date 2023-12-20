import { configureStore } from "@reduxjs/toolkit";
import ScholarshipReducer from "../slices/ScholarShipSlice";
import CourseReducer from "../slices/InstitutionSlice";
import InstituteReducer from "../slices/CourseSlice";
import FacultyReducer from "../slices/FacultySlice";

export function makeStore() {
  return configureStore({
    reducer: {
      // ...
      scholarship: ScholarshipReducer,
      course: CourseReducer,
      institute: InstituteReducer,
      faculty: FacultyReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
