export enum CyprusCurrencies {
  EUR = 'EUR',
  USD = 'USD'
}
export interface CyprusInterface {
  cities: string[];
  population: number;
  currency: CyprusCurrencies.EUR,
  donation: number
}
