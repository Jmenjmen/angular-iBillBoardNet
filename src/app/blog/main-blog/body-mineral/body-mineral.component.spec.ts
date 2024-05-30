import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMineralComponent } from './body-mineral.component';

describe('BodyMineralComponent', () => {
  let component: BodyMineralComponent;
  let fixture: ComponentFixture<BodyMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyMineralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
