import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySoilConditionerComponent } from './body-soil-conditioner.component';

describe('BodySoilConditionerComponent', () => {
  let component: BodySoilConditionerComponent;
  let fixture: ComponentFixture<BodySoilConditionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodySoilConditionerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodySoilConditionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
