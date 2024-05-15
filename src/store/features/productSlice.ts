import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Product } from "../../types/interfaces_product";
import { RootState } from "../store";

// Create an asynchronous thunk using createAsyncThunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get("/product/"); // Replace with your API endpoint
  const data = await response.data;
  return data as Product[];
});

interface ProductState {
  productList: Array<Product>,
  status: string,
  error: null | undefined | string,
}

const initialState: ProductState = {
  productList: [],
  status: 'idle',
  error: null,
}



export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // addProductToCart: (state, action) => {
    //   console.log('addProductToCart', state);
    //   console.log('addProductToCart', action);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        let listEdits = action.payload.map((ci: Product) => {
          return {
            id: ci.id, name: ci.name, imageURL: ci.imageURL, price: ci.price, description: ci.description,
            categoryId: ci.categoryId, qty: 0
          }
        });
        state.productList = listEdits;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});

// export const { addProductToCart } = ProductSlice.actions;
export const selectproductsList = (state: RootState) => state.product.productList;
export const getProductsStatus = (state: RootState) => state.product.status;
export const getProductsError = (state: RootState) => state.product.error;


export default ProductSlice.reducer;
