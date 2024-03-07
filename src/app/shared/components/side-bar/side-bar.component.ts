import { Component } from '@angular/core';
import {BarRouteLink} from "../../interfaces/bar-route-link";

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
public routes_link: BarRouteLink[] = [
  {
    name: 'Por capital',
    routeString: 'countries/by-capital'
  },
  {
    name: 'Por region',
    routeString: 'countries/by-region'
  },
  {
    name: 'Por nombre',
    routeString: 'countries/by-country'
  },
  {
    name: 'Todos los paises',
    routeString: 'countries/'
  }
]
}
