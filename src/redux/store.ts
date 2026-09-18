import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './slicers/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});

// export type for ts purpose
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;