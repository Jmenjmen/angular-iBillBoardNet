import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCMPComponent } from './main-cmp.component';

describe('MainCMPComponent', () => {
  let component: MainCMPComponent;
  let fixture: ComponentFixture<MainCMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCMPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
