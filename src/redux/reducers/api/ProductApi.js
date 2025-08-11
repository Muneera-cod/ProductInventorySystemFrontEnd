import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi", 
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7260/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) =>  id ? `/product?ProductId=${id}` : `/product`, 
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
