import { Component } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { AppStateInterface } from '../../types/appState.interface';
import * as ComplexCounterActions from './store/actions';
import { Observable, combineLatest, of } from 'rxjs';
import * as Selectors from './store/selectors';
import { map, switchMap } from 'rxjs/operators';


type ComplexCounterVM = Observable<{
  count: number;
  max: number | null;
  maxedOut: boolean;
}>;

@Component({
  selector: 'app-complex-counter',
  templateUrl: './complex-counter.component.html',
  styleUrls: ['./complex-counter.component.scss']
})
export class ComplexCounterComponent {
  private readonly count$: Observable<number>;
  private readonly max$!: Observable<number | null>;
  readonly viewModel$!: ComplexCounterVM;

  constructor(private store: Store<AppStateInterface>) {
    this.count$ = this.store.pipe(select(Selectors.valueSelector));
    this.max$ = this.store.pipe(select(Selectors.maxSelector));

    this.viewModel$ = combineLatest([this.count$, this.max$]).pipe(
      switchMap(([count, max]) => {
        const maxedOut = Boolean(max && count >= max);
        return of([count, max, maxedOut]);
        // or like this to avoid casting at the end of the method
        // return of<[number, number | null, boolean]>([count, max, maxedOut]);

      }),
      map(([count, max, maxedOut]) => ({count, max, maxedOut}))
    ) as ComplexCounterVM;
  }

  increment(): void {
    this.store.dispatch(ComplexCounterActions.increment());
  }

  decrement(): void {
    this.store.dispatch(ComplexCounterActions.decrement());
  }

  setMax() {
    this.store.dispatch(ComplexCounterActions.setMax({maximum: 5}));
  }
}
