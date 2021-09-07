import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyjewelryComponent } from './prettyjewelry.component';

describe('PrettyjewelryComponent', () => {
  let component: PrettyjewelryComponent;
  let fixture: ComponentFixture<PrettyjewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrettyjewelryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyjewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
