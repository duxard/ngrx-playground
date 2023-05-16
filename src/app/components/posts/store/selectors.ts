import { AppStateInterface } from '../../../types/appState.interface';
import { createSelector } from '@ngrx/store';

export const selectPostsSlice = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectPostsSlice,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectPostsSlice,
  (state) => state.posts
);

export const errorSelector = createSelector(
  selectPostsSlice,
  (state) => state.error
);
