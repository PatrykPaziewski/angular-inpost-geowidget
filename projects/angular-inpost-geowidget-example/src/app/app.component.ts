import { Component } from '@angular/core';
import { GeowidgetTypeEnum } from 'angular-inpost-geowidget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public GeowidgetTypeEnum = GeowidgetTypeEnum;
  public isModalOpened = false;

  public selectPoint(point: any): void {
    console.log('Selected point: ', point);
  }
}
