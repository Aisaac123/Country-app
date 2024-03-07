import { Component } from '@angular/core';
import {CountryResponse} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries:CountryResponse[] = [];
  searchByRegion(search:string):void{
    this.service.searchByOption(search).subscribe(countries => {
      this.countries = countries
    })
  }
  constructor(public readonly service:CountriesService) {
    this.service.Option = 'region'
  }
}
