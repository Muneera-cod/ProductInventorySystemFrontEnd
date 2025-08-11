import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi", 
  baseQuery:fetchBaseQuery({
        baseUrl: "https://localhost:7260/api",
        prepareHeaders: (headers) => {
            const tokenString = localStorage.getItem('user');
            const token = tokenString ? JSON.parse(tokenString).access_token : null;
            headers.set('Content-Type', 'application/json');
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) =>  id ? `/product?ProductId=${id}` : `/product`, 
    }),
    updateProduct:builder.mutation({
        query: (product) => ({
            url: `/product/${product.id}`,
            method: "POST", 
            body: product
        })  
      })
  }),
});

export const { useGetProductsQuery,useUpdateProductMutation } = productApi;
