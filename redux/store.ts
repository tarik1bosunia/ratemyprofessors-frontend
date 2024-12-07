import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./fetures/authSlice";
import modalReducer from "./fetures/modalSlice";

import { authUserApi } from "./services/authenticated/userSlice";
import { authRatingsApi } from "./services/authenticated/ratingsSlice";

import { publicSearchApi } from "./services/public/searchSlice";
import { publicMetadataApi } from "./services/public/metadataSlice";
import { publicRatingsApi } from "./services/public/ratingSlice";
import { apiSlice } from "./services/apiSlice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authUserApi.reducerPath]: authUserApi.reducer,
    [authRatingsApi.reducerPath]: authRatingsApi.reducer,

    [publicRatingsApi.reducerPath]: publicRatingsApi.reducer,
    [publicSearchApi.reducerPath]: publicSearchApi.reducer,
    [publicMetadataApi.reducerPath]: publicMetadataApi.reducer,
    
    auth: authReducer,
    modals: modalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      authUserApi.middleware,
      authRatingsApi.middleware,

      publicRatingsApi.middleware,
      publicSearchApi.middleware,
      publicMetadataApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
