import { Component } from '@angular/core';
import {CountryResponse} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styles: ``
})
export class AllCountriesComponent {
  public countries:CountryResponse[]  = [];
  searchByRegion():void{
    this.service.searchByOption().subscribe(countries => {
      if (!countries ) return
      this.countries = countries
    })
  }
  constructor(public readonly service:CountriesService) {
    this.service.Option = 'all'
    this.searchByRegion()
  }
}
