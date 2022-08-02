import { configureStore } from '@reduxjs/toolkit'

import bookmark from './BookmarkSlicer'
import history from './HistorySlicer'

const store = configureStore({
  reducer: {
    bookmark,
    history
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store