import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {CountryResponse} from "../interfaces/country";

@Injectable()
export class CountriesService {

  private url:string = 'https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  searchByOption(query?:string):Observable<CountryResponse[] | null>{
    let url:string = `${this.url}/${this.option}`;
    if (query) url = url + `/${query}`;
    return this.http.get<CountryResponse[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }
  private option?:string;
  set Option(value:'alpha' | 'all' |'region' | 'name' | 'capital') {
    this.option = value;
  }
}
