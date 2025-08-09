import { createBrowserRouter } from "react-router-dom";
import ErrorNotFoundPage from '../Components/Pages/ErrorNotFoundPage'
import Loading from "../Components/Pages/Loading";
import { lazy,Suspense } from "react";

const ProductPage=lazy(()=>import('../Components/Pages/ProductPage'));

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}><ProductPage/></Suspense>,
    },
    {
        path:'*',
        element:<ErrorNotFoundPage/>
    }
])