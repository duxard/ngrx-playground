import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { CyprusCurrencies } from './cyprus.model';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../types/appState.interface';
import * as Selectors from './store/selectors';
import * as Actions from './store/actions';

@Component({
  selector: 'app-cyprus',
  templateUrl: './cyprus.component.html',
  styleUrls: ['./cyprus.component.scss']
})
export class CyprusComponent {

  cities$!: Observable<string[]>;
  population$!: Observable<number>;
  currency$!: Observable<CyprusCurrencies>;
  donation$!: Observable<number>;

  viewModel$!: Observable<{
    cities: string[];
    population: number;
    currency: string;
    donation: number;
  }>;

  constructor(private store: Store<AppStateInterface>) {
    this.cities$ = this.store.select(Selectors.cyCitiesSelector);
    this.population$ = this.store.select(Selectors.cyPopulationSelector);
    this.currency$ = this.store.select(Selectors.cyCurrencySelector);
    this.donation$ = this.store.select(Selectors.cyDonationSelector);

    this.viewModel$ = combineLatest([
      this.cities$,
      this.population$,
      this.currency$,
      this.donation$
    ]).pipe(
      map(([cities, population, currency, donation]) => ({cities, population, currency, donation}))
    )
  }

  donate(): void {
    this.store.dispatch(Actions.donate({amount: 100}));
  }

}
