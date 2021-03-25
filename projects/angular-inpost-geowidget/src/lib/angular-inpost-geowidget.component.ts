import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'scriptjs';
import { GeowidgetTypeEnum, IGeoWidgetInitConfig } from './angular-inpost-geowidget.model';

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

  @Input()
  public widgetType: GeowidgetTypeEnum = GeowidgetTypeEnum.WIDGET;

  @Input()
  public set isModalOpened(isOpened: boolean) {
    if (isOpened) {
      this._executeModalWidget();
    }
  }

  @Output()
  public isModalOpenedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public onPointSelect: EventEmitter<any> = new EventEmitter<any>();

  private _map: any;

  private _isScriptInitiated = false;

  constructor() {
  }

  public ngOnInit(): void {
    get('https://geowidget.easypack24.net/js/sdk-for-javascript.js', () => {
      this._isScriptInitiated = true;
      easyPack.init(this.initialConfig);
      this._initMap();
    });
  }

  private _initMap(): void {
    if (this._isScriptInitiated) {
      switch (this.widgetType) {
        case GeowidgetTypeEnum.DROPDOWN:
          this._executeDropdownWidget();
          break;
        case GeowidgetTypeEnum.MODAL:
          break;
        default:
          this._executeMapWidget();
          break;
      }
    }
  }

  private _executeMapWidget(): void {
    this._map = easyPack.mapWidget(this.id, point => this.onPointSelect.emit(point));
  }

  private _executeModalWidget(): void {
    this._map = new easyPack.modalMap((point, modal) => {
      modal.closeModal();
      this.isModalOpenedChange.emit(false);
      this.onPointSelect.emit(point);
    }, {width: 500, height: 600});
  }

  private _executeDropdownWidget(): void {
    this._map = easyPack.dropdownWidget(this.id, point => this.onPointSelect.emit(point));
  }

}
