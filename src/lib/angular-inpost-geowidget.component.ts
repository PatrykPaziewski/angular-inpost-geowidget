import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { get } from 'scriptjs';
import { GeowidgetTypeEnum, IGeoWidgetInitConfig } from './angular-inpost-geowidget.model';
import { AngularInpostGeowidgetService } from './angular-inpost-geowidget.service';
import { Subscription } from 'rxjs';

declare var easyPack;

@Component({
  selector: 'lib-angular-inpost-geowidget',
  template: `
    <div [id]="id"></div>
  `,
  styles: []
})
export class AngularInpostGeowidgetComponent implements OnInit, OnDestroy {

  @Input()
  public initialConfig: IGeoWidgetInitConfig = {};

  @Input()
  public id = 'easypack-map';

  @Input()
  public widgetType: GeowidgetTypeEnum = GeowidgetTypeEnum.WIDGET;

  @Output()
  public onPointSelect: EventEmitter<any> = new EventEmitter<any>();

  private _map: any;

  private _isScriptInitiated = false;

  private _openedModalSubscription: Subscription;

  constructor(private angularInpostGeowidgetService: AngularInpostGeowidgetService) {
  }

  public ngOnInit(): void {
    get('https://geowidget.easypack24.net/js/sdk-for-javascript.js', () => {
      this._isScriptInitiated = true;
      easyPack.init(this.initialConfig);
      this._initMap();
    });

    this._openedModalSubscription = this.angularInpostGeowidgetService.openModalWidget.subscribe(() => this._executeModalWidget());
  }

  public ngOnDestroy(): void {
    if (this._openedModalSubscription) {
      this._openedModalSubscription.unsubscribe();
    }
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
      this.onPointSelect.emit(point);
    }, {width: 500, height: 600});
  }

  private _executeDropdownWidget(): void {
    this._map = easyPack.dropdownWidget(this.id, point => this.onPointSelect.emit(point));
  }

}
