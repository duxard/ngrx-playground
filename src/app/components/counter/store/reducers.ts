import {createReducer, on} from '@ngrx/store';
import * as CounterActions from './actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.getCount, (state) => state),
  on(CounterActions.increment, (state) => state + 1),
  on(CounterActions.decrement, (state) => state - 1),
  on(CounterActions.reset, (state) => 0),
  on(CounterActions.multiplyBy, (state, action) => state * action.multiplier)
);
