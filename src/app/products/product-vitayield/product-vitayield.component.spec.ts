import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVitayieldComponent } from './product-vitayield.component';

describe('ProductVitayieldComponent', () => {
  let component: ProductVitayieldComponent;
  let fixture: ComponentFixture<ProductVitayieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductVitayieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductVitayieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
