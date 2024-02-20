import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
    name:'results',
    initialState:{
        searchQuery:"",
        videoResults:[]
    },
    reducers:{
        setSearchQuery : (state, action) => {
            state.searchQuery = action.payload
        },
        getVideoResults: (state, action) => {
            state.videoResults = action.payload
        }
    }
})

export const {setSearchQuery, getVideoResults} = resultsSlice.actions

export default resultsSlice.reducer;

