import { Component } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {CountryResponse} from "../../interfaces/country";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:CountryResponse[] = [];
  searchByCapital(search:string):void{
    this.service.searchByOption(search).subscribe(countries => {
      this.countries = countries
    })
  }
  constructor(public readonly service:CountriesService) {
    this.service.Option = 'capital'
  }
}
