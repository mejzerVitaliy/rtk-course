import { configureStore } from "@reduxjs/toolkit";
import sliceModalAdd from "../../features/modalAdd/sliceModalAdd";

export const store = configureStore({
    reducer: {
        modalAdd: sliceModalAdd
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;