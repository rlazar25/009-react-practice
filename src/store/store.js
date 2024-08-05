import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
    reducer: {
        favoriteStore: favoriteSlice
    }
});

export default store;