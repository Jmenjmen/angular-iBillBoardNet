import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsRouteComponent } from './produts-route.component';

describe('ProdutsRouteComponent', () => {
  let component: ProdutsRouteComponent;
  let fixture: ComponentFixture<ProdutsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutsRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
