
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const LoadingStatus = {
    Idle :'idle',
    Loading :'loading',
    Succeeded :'succeeded',
    Failed :'failed',
} as const;
export type LoadingStatus = typeof LoadingStatus[keyof typeof LoadingStatus]

interface DataState {
    items: Post[];
    status: LoadingStatus
}

const initialState: DataState = {
    items: [],
    status: LoadingStatus.Idle
}

export const fetchData = createAsyncThunk<Post[]>('data/fetchData', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        throw new Error('Network response error')
    }

    const data = await response.json();
    return data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {state.status = LoadingStatus.Loading;})
        .addCase(fetchData.fulfilled, (state, action) => {state.status = LoadingStatus.Succeeded; state.items = action.payload})
        .addCase(fetchData.rejected, (state) => {state.status = LoadingStatus.Failed})
    }
})

export default dataSlice.reducer;