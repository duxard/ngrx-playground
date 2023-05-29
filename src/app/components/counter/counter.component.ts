import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { AppStateInterface } from '../../types/appState.interface';
import { Observable } from 'rxjs';
import * as CounterActions from './store/actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.count$ = this.store.select('count');
    // or:
    // this.count$ = this.store.pipe(select('count'));
  }

  increase(): void {
    this.store.dispatch(CounterActions.increment());
  }

  decrease(): void {
    this.store.dispatch(CounterActions.decrement());
  }

  reset(): void {
    this.store.dispatch(CounterActions.reset());
  }

  multiply(): void {
    this.store.dispatch(CounterActions.multiplyBy({multiplier: 10}));
  }
}
