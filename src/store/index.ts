import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { baseAPI } from 'services';

const rootReducer = combineReducers({
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export const setupStore = (preloadedState?: RootState) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
