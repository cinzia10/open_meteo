import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastMainComponent } from './forecast-main.component';

describe('ForecastMainComponent', () => {
  let component: ForecastMainComponent;
  let fixture: ComponentFixture<ForecastMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
