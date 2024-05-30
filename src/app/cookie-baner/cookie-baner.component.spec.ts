import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBanerComponent } from './cookie-baner.component';

describe('CookieBanerComponent', () => {
  let component: CookieBanerComponent;
  let fixture: ComponentFixture<CookieBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookieBanerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookieBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
