import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { getCookie, cookies.set } from 'typescript-cookie'
// import { Cookies } from 'typescript-cookie'
import Cookies from "js-cookie";


import { Ichapater, Iverse } from '../type';


export interface IBookmarks {
    bookmarks: Iverse[],
    bookmarkedSurah: Ichapater[]
}

const initialState: any = {
    bookmarks: Cookies.get("bookmarks")
        ? Cookies.get("bookmarks")
        : [],
    bookmarkedSurah: Cookies.get("bookmarkedSurah")
        ? Cookies.get("bookmarkedSurah")
        : [],
}

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addToBookmark: (state, action: PayloadAction<any>) => {
            let withNewOne: any = [action.payload, ...state.bookmarks];
            Cookies.set("bookmarks", withNewOne)
            state.bookmarks = withNewOne
        },

        removeFromBookmark: (state, action: PayloadAction<any>) => {
            let withNewOne = state.bookmarks.filter(
                (item: any) => item.id != action.payload.id
            );
            Cookies.set("bookmarks", withNewOne)
            state.bookmarks = withNewOne;
        },

        addToBookmarkedSurah: (state, action: PayloadAction<Ichapater>) => {
            let withNewOne: any = [action.payload, ...state.bookmarkedSurah];
            Cookies.set("bookmarkedSurah", withNewOne)
            state.bookmarkedSurah = withNewOne;
        },

        removeFromBookmarkedSurah: (state, action: PayloadAction<Ichapater>) => {
            let withNewOne = state.bookmarkedSurah.filter(
                (item: any) => item.id != action.payload.id
            );
            Cookies.set("bookmarkedSurah", withNewOne)
            state.bookmarkedSurah = withNewOne;
        },
    },

})


export const {
    addToBookmark,
    removeFromBookmark,
    addToBookmarkedSurah,
    removeFromBookmarkedSurah,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
