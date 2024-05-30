import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCalciteComponent } from './product-calcite.component';

describe('ProductCalciteComponent', () => {
  let component: ProductCalciteComponent;
  let fixture: ComponentFixture<ProductCalciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCalciteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCalciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
