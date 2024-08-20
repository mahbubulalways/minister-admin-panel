import baseApi from "../../api/baseApi/baseApi";

const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductByCategory: builder.query({
      query: (category) => `/products/get-products-by-category/${category}`,
      //   providesTags: ["Tasks"],
    }),
    // getSingleProduct: builder.query({
    //   query: (payload) => `/products/single-products/${payload?.id}`,
    //   //   providesTags: ["Tasks"],
    // }),
    postTelevisionIntoDB: builder.mutation({
      query: (payload) => ({
        url: "/products/television/insert-television",
        method: "POST",
        body: payload,
      }),
      //   invalidatesTags: ["Tasks"],
    }),
  }),
});
export const { useGetProductByCategoryQuery, usePostTelevisionIntoDBMutation } =
  authApiSlice;
export default authApiSlice.reducer;
