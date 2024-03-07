import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {CountryResponse} from "../interfaces/country";

@Injectable()
export class CountriesService {

  private url:string = 'https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  searchCapital(query:string):Observable<CountryResponse[]>{
    const url = `${this.url}/capital/${query}`
    return this.http.get<CountryResponse[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }
}
