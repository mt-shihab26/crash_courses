import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: string;
    image: string;
    title: string;
    price: number;
}

export enum PRODUCT_STATUS {
    IDLE = "idle",
    ERROR = "error",
    LOADING = "loading",
}

export interface ProductsState {
    data: Product[];
    status: PRODUCT_STATUS;
}

const initialState: ProductsState = {
    data: [],
    status: PRODUCT_STATUS.IDLE,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // setData: (state, action) => {
        //     state.data = action.payload;
        // },
        // setStatus: (state, action) => {
        //     state.status = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = PRODUCT_STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = PRODUCT_STATUS.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = PRODUCT_STATUS.ERROR;
            });
    },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

// Thunks
// export const fetchProducts = () => async (dispatch: Dispatch, getState: () => State) => {
//     dispatch(productsActions.setStatus(PRODUCT_STATUS.LOADING));
//     try {
//         const url = "https://fakestoreapi.com/products";
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         dispatch(productsActions.setData(data));
//         dispatch(productsActions.setStatus(PRODUCT_STATUS.IDLE));
//     } catch (e: any) {
//         console.log(e);
//         dispatch(productsActions.setStatus(PRODUCT_STATUS.ERROR));
//     }
// };

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
});
