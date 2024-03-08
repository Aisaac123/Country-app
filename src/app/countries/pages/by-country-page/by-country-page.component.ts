import { Component } from '@angular/core';
import {CountryResponse} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries:CountryResponse[] = [];
  searchByCountry(search:string):void{
    this.service.searchByOption(search).subscribe(countries => {
      if (!countries ) return
      this.countries = countries
    })
  }
  constructor(public readonly service:CountriesService) {
    this.service.Option = 'name'
  }
}
