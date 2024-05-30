import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductXorbComponent } from './product-xorb.component';

describe('ProductXorbComponent', () => {
  let component: ProductXorbComponent;
  let fixture: ComponentFixture<ProductXorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductXorbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductXorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
