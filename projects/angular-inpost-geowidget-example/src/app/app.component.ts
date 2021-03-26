import { Component } from '@angular/core';
import { AngularInpostGeowidgetService, GeowidgetTypeEnum } from 'angular-inpost-geowidget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public GeowidgetTypeEnum = GeowidgetTypeEnum;
  public isModalOpened = false;

  constructor(public angularInpostGeowidgetService: AngularInpostGeowidgetService) {
  }

  public selectPoint(point: any): void {
    console.log('Selected point: ', point);
  }
}
