import { AppStateInterface } from '../../../types/appState.interface';
import { createSelector } from '@ngrx/store';

export const selectCyprusSlice = (state: AppStateInterface) => state.cyprusInfo;

export const cyCitiesSelector = createSelector(
  selectCyprusSlice,
  (state) => state.cities
);

export const cyPopulationSelector = createSelector(
  selectCyprusSlice,
  (state) => state.population
);

export const cyCurrencySelector = createSelector(
  selectCyprusSlice,
  (state) => state.currency
);

export const cyDonationSelector = createSelector(
  selectCyprusSlice,
  (state) => state.donation
);
