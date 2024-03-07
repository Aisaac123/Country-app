import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  @Input()
  public url!:string;
  constructor(private aRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
        this.aRoute.params.subscribe(({id}) => {
          console.log({params: id})
        })
    }
}
