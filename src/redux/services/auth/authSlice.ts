import baseApi from "../../api/baseApi/baseApi";

const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/login-user",
        method: "POST",
        body: payload,
      }),
      //   invalidatesTags: ["Tasks"],
    }),
  }),
});
export const { useLoginUserMutation } = authApiSlice;
export default authApiSlice.reducer;
