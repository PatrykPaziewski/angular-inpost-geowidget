import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularInpostGeowidgetService {

  public openModalWidget: Subject<void> = new Subject<void>();
  constructor() { }
}
