import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: favorite,
    initialState: {
        favoriteProducts: [],
        isLoading: false
    },
    reducers:{
        addFavoriteProductAction: (state, acton) => {},
    }
});

export const {addFavoriteProductAction} = favoriteSlice.actions;
export default favoriteSlice.reducer;