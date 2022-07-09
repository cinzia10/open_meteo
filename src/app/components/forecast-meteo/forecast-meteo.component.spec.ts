import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastMeteoComponent } from './forecast-meteo.component';

describe('ForecastMeteoComponent', () => {
  let component: ForecastMeteoComponent;
  let fixture: ComponentFixture<ForecastMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastMeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
