import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/productSlice";
import { CartSlice } from "./features/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        product: ProductSlice.reducer,
        cart: CartSlice.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
