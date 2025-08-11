import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "../reducers/api/ProductApi";
export const store = configureStore({
    reducer:{
    productApi:productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware), 
})