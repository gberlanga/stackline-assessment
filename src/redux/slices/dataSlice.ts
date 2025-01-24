import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProductDetails } from '../../utils/api';

export interface Product {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: [{
        customer: string;
        review: string;
        score: number;
    }];
    retailer: string;
    details: string[];
    tags: string[];
    sales: [{
        weekEnding: string;
        retailSales: number;
        wholesaleSales: number;
        unitsSold: number;
        retailerMargin: number;
    }];
}

interface DataState {
    products: Product[],
    loading: boolean,
    error: string | null;
}

const initialState: DataState = {
    products: [],
    loading: false,
    error: null
};

export const fetchProductDetailsAsync = createAsyncThunk<Product[], void, {rejectValue: string}> (
    'data/fetchProductDetails',
    async(_, thunkAPI) => {
        try {
            const products = await fetchProductDetails();
            return products;
        } catch (error) {
            if (error instanceof Error) {
              return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue("An unknown error occurred.");
          }
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductDetailsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchProductDetailsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Failed to fetch product details";
        });
    },
});

export default dataSlice.reducer;