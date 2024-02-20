import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";
import resultsSlice from "./slices/resultsSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search: searchSlice,
        chat:chatSlice,
        results: resultsSlice,
    },
})

export default store;