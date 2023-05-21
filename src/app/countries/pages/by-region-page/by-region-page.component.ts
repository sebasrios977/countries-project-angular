import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private contriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.contriesService.cacheStore.byRegion.region;
    this.countries = this.contriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.isLoading = true;
    this.contriesService.searchByRegion(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }
}
