import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private contriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.contriesService.cacheStore.byCountry.term;
    this.countries = this.contriesService.cacheStore.byCountry.countries;
  }
  searchByCountry(term: string): void {
    this.isLoading = true;
    this.contriesService.searchByCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }
}
