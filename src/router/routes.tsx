import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import HomeView from "../views/pages/HomeView";
import CartView from "../views/pages/CartView";
import App from "../App";
import Login from "../views/pages/Login";
import ProductDetails from "../views/pages/ProductDetails";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route index element={<HomeView />}></Route>
            <Route path='cart' element={<CartView />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='productDetails/:id' element={<ProductDetails products={[]} />} />
        </Route>
    )
);

export default router;