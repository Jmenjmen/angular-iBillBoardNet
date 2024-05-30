import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVitacalciteComponent } from './body-vitacalcite.component';

describe('BodyVitacalciteComponent', () => {
  let component: BodyVitacalciteComponent;
  let fixture: ComponentFixture<BodyVitacalciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyVitacalciteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyVitacalciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
