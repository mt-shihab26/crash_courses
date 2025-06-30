import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartReducer } from "./slice/cartSlice";
import { productsReducer } from "./slice/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
