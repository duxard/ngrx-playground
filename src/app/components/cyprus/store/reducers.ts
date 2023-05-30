import { CyprusCurrencies, CyprusInterface } from '../cyprus.model';
import { createReducer, on } from '@ngrx/store';
import * as CyprusActions from './actions';

export const initialStore: CyprusInterface = {
  cities: ['Larnaca', 'Limassol'],
  population: 100,
  currency: CyprusCurrencies.EUR,
  donation: 0
};

export const cyprusReducer = createReducer(
  initialStore,
  on(CyprusActions.donate, (state, action) => ({...state, donation: state.donation + action.amount}))
);
