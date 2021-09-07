import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedgiftsComponent } from './customizedgifts.component';

describe('CustomizedgiftsComponent', () => {
  let component: CustomizedgiftsComponent;
  let fixture: ComponentFixture<CustomizedgiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedgiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
