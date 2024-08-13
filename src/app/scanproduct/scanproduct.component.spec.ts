import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanproductComponent } from './scanproduct.component';

describe('ScanproductComponent', () => {
  let component: ScanproductComponent;
  let fixture: ComponentFixture<ScanproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
