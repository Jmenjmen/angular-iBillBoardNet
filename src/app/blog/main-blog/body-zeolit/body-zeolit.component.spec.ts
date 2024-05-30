import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyZeolitComponent } from './body-zeolit.component';

describe('BodyZeolitComponent', () => {
  let component: BodyZeolitComponent;
  let fixture: ComponentFixture<BodyZeolitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyZeolitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyZeolitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
