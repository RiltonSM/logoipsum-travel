import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./reducers/ticket";

const store = configureStore({
    reducer: {
        ticket: ticketReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;

