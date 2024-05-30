import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCalciumComponent } from './body-calcium.component';

describe('BodyCalciumComponent', () => {
  let component: BodyCalciumComponent;
  let fixture: ComponentFixture<BodyCalciumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyCalciumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyCalciumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
