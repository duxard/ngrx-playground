import {createAction, props} from '@ngrx/store';

export const donate = createAction('[Cyprus] Donate', props<{amount: number}>());
