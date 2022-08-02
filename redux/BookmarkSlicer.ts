import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { getCookie, cookies.set } from 'typescript-cookie'
// import { Cookies } from 'typescript-cookie'
import Cookies from "js-cookie";


import { Ichapater, Iverse } from '../type';


export interface IBookmarks {
    bookmarks: Iverse[],
    bookmarkedSurah: Ichapater[]
}

const initialState: IBookmarks = {
    bookmarks: (Cookies.get("bookmarks") as unknown) as Iverse
        ? JSON.parse(Cookies.get("bookmarks"))
        : [],
    bookmarkedSurah: Cookies.get("bookmarkedSurah")
        ? JSON.parse(Cookies.get("bookmarkedSurah"))
        : [],
}

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addToBookmark: (state, action: PayloadAction<Iverse>) => {
            let withNewOne: Iverse[] = [action.payload, ...state.bookmarks];
            Cookies.set("bookmarks", JSON.stringify(withNewOne))
            state.bookmarks = withNewOne
        },

        removeFromBookmark: (state, action: PayloadAction<Iverse>) => {
            let withNewOne = state.bookmarks.filter(
                (item) => item.id != action.payload.id
            );
            Cookies.set("bookmarks", JSON.stringify(withNewOne))
            state.bookmarks = withNewOne;
        },

        addToBookmarkedSurah: (state, action: PayloadAction<Ichapater>) => {
            let withNewOne = [action.payload, ...state.bookmarkedSurah];
            Cookies.set("bookmarkedSurah", JSON.stringify(withNewOne))
            state.bookmarkedSurah = withNewOne;
        },

        removeFromBookmarkedSurah: (state, action: PayloadAction<Ichapater>) => {
            let withNewOne = state.bookmarkedSurah.filter(
                (item) => item.id != action.payload.id
            );
            Cookies.set("bookmarkedSurah", JSON.stringify(withNewOne))
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
