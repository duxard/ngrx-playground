import { AppStateInterface } from '../../../types/appState.interface';
import { createSelector } from '@ngrx/store';


export const selectComplexCounterSlice = (state: AppStateInterface) => state.complexCounter;

export const valueSelector = createSelector(
  selectComplexCounterSlice,
  (state) => state.value
);

export const maxSelector = createSelector(
  selectComplexCounterSlice,
  (state) => state.max
);

