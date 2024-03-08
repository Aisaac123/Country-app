import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../../services/countries.service";
import {switchMap} from "rxjs";
import {CountryResponse} from "../../interfaces/country";

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country!: CountryResponse
  @Input()
  public url!:string;
  constructor(private aRoute:ActivatedRoute,
              private countryService:CountriesService,
              private router:Router) {
    this.countryService.Option = 'alpha'
  }

  ngOnInit(): void {
    this.aRoute.params
          .pipe(
            switchMap( ({id}) => this.countryService.searchByOption(id))
          )
          .subscribe(countries => {
            if (!countries) {
              return this.router.navigateByUrl('')
            }
            else {
              return this.country = countries[0];
            }
          });
    }
}
