import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVitalandComponent } from './product-vitaland.component';

describe('ProductVitalandComponent', () => {
  let component: ProductVitalandComponent;
  let fixture: ComponentFixture<ProductVitalandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductVitalandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductVitalandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
