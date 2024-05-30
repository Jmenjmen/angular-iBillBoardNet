import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAgricultureComponent } from './body-agriculture.component';

describe('BodyAgricultureComponent', () => {
  let component: BodyAgricultureComponent;
  let fixture: ComponentFixture<BodyAgricultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyAgricultureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyAgricultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
