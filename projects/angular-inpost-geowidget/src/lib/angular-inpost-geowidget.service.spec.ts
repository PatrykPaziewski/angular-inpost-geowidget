import { TestBed } from '@angular/core/testing';

import { AngularInpostGeowidgetService } from './angular-inpost-geowidget.service';

describe('AngularInpostGeowidgetService', () => {
  let service: AngularInpostGeowidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularInpostGeowidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
