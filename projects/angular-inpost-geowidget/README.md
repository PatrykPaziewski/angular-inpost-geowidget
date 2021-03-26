# AngularInpostGeowidget

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Using a widget

1. Add inpost widget styles `<link rel="stylesheet" href="https://geowidget.easypack24.net/css/easypack.css" />` to your `src/index.html` file. 
2. Run `npm install angular-inpost-geowidget` to add a npm library to your project.
3. Use widget component in template `<lib-angular-inpost-geowidget></lib-angular-inpost-geowidget>`

## Examples of usage

Basic usage as map widget:
```
<lib-angular-inpost-geowidget
            [widgetType]="GeowidgetTypeEnum.WIDGET"
            (onPointSelect)="selectPoint($event)"
 ></lib-angular-inpost-geowidget>
```


Show widget as dropdown selector:
```
<lib-angular-inpost-geowidget
            [widgetType]="GeowidgetTypeEnum.DROPDOWN"
            (onPointSelect)="selectPoint($event)"
 ></lib-angular-inpost-geowidget>
```


Show widget as modal window:
```
<lib-angular-inpost-geowidget
            [widgetType]="GeowidgetTypeEnum.MODAL"
            (onPointSelect)="selectPoint($event)"
 ></lib-angular-inpost-geowidget>

// open modal by service
<button (click)="angularInpostGeowidgetService.openModalWidget.next()">Open modal</button>
```
