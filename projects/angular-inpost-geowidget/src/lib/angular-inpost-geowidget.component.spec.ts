import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInpostGeowidgetComponent } from './angular-inpost-geowidget.component';

describe('AngularInpostGeowidgetComponent', () => {
  let component: AngularInpostGeowidgetComponent;
  let fixture: ComponentFixture<AngularInpostGeowidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularInpostGeowidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInpostGeowidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
