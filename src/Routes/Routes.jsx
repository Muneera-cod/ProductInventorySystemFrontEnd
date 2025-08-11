import { createBrowserRouter } from "react-router-dom";
import ErrorNotFoundPage from '../Components/Pages/ErrorNotFoundPage'
import Loading from "../Components/Pages/Loading";
import { lazy,Suspense } from "react";

const ProductPage=lazy(()=>import('../Components/Pages/ProductPage'));
const ProductDetailsPage = lazy(() => import("../Components/Pages/ProductDetailsPage"));

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}><ProductPage/></Suspense>,
    },
     {
    path: '/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <ProductDetailsPage />
      </Suspense>
    ),
  },
    {
        path:'*',
        element:<ErrorNotFoundPage/>
    }
])