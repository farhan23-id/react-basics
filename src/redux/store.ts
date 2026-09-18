import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './slicers/counterSlice'
import dataSlice from './slicers/dataSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        data: dataSlice
    }
});

// export type for ts purpose
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;