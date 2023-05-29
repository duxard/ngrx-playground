import { createAction, props } from '@ngrx/store';

export const getCount = createAction('[Counter] Get Count');
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const multiplyBy = createAction(
  '[Counter] Multiply By',
  props<{multiplier: number}>()
);
