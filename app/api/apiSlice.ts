import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@/slices/AuthSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://ec2-65-0-92-91.ap-south-1.compute.amazonaws.com:4000/api/v1",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// basequery with reauth

// const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error?.status === 401) {
//     const refreshResult = await baseQuery("/login", api, extraOptions);
//     console.log(refreshResult);
//   }
// };
