import { AppStateInterface } from '../../../types/appState.interface';
import { createSelector } from '@ngrx/store';

export const selectPostsSlice = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(selectPostsSlice, (state) => state.isLoading);
