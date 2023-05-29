import { ComplexCounterInterface } from '../complex-counter.model';
import { createReducer, on } from '@ngrx/store';
import * as ComplexCounterActions from './actions';

export const initialState: ComplexCounterInterface = {
  value: 0,
  max: 10
};

export const complexCounterReducer = createReducer(
  initialState,
  on(ComplexCounterActions.increment, (state) => ({...state, value: state.value+1})),
  on(ComplexCounterActions.decrement, (state) => ({...state, value: state.value-1})),
  on(ComplexCounterActions.setMax, (state, action) => ({...state, max: action.maximum})),
);
