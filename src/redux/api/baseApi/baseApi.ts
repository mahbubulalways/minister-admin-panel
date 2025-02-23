import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://minister-server.vercel.app/api/v1/",
  }),
  endpoints: () => ({}),
});
export default baseApi;
