import { Component } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { AppStateInterface } from '../../types/appState.interface';
import * as ComplexCounterActions from './store/actions';
import { Observable } from 'rxjs';
import { valueSelector } from './store/selectors';


@Component({
  selector: 'app-complex-counter',
  templateUrl: './complex-counter.component.html',
  styleUrls: ['./complex-counter.component.scss']
})
export class ComplexCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.count$ = this.store.pipe(select(valueSelector));
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
