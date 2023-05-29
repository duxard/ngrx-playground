import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Complex Counter] Increment');
export const decrement = createAction('[Complex Counter] Decrement');
export const setMax = createAction(
  '[Complex Counter] Set Max',
  props<{maximum: number}>()
);
