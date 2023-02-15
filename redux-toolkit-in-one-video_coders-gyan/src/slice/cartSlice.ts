import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

export interface CartItem {
    data: Product;
    count: number;
}

export type CartState = CartItem[];

const initialState: CartState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const index = state.findIndex(item => item.data.id === action.payload.id);
            if (index !== -1) {
                state[index].count++;
            } else {
                state.push({ data: action.payload, count: 1 });
            }
        },
        remove: (state, action) => {
            const index = state.findIndex(item => item.data.id === action.payload);
            if (state[index].count !== 1) {
                state[index].count--;
            } else {
                return state.filter(cartItem => cartItem.data.id !== action.payload);
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
