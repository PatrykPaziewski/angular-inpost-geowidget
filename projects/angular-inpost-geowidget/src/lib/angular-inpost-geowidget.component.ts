import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'scriptjs';
import { IGeoWidgetInitConfig } from './angular-inpost-geowidget.model';

declare var easyPack;

@Component({
  selector: 'lib-angular-inpost-geowidget',
  template: `
    <div [id]="id"></div>
  `,
  styles: []
})
export class AngularInpostGeowidgetComponent implements OnInit {

  @Input()
  public initialConfig: IGeoWidgetInitConfig = {};

  @Input()
  public id = 'easypack-map';

  @Output()
  public onPointSelect: EventEmitter<any> = new EventEmitter<any>();

  private map: any;

  constructor() {
  }

  public ngOnInit(): void {
    get('https://geowidget.easypack24.net/js/sdk-for-javascript.js', () => this._initMap());
  }

  private _initMap(): void {
    easyPack.init(this.initialConfig);
    this.map = new easyPack.mapWidget(this.id, point => this.onPointSelect.emit(point));
  }

}
