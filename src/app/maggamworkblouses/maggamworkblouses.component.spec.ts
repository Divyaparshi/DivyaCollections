import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaggamworkblousesComponent } from './maggamworkblouses.component';

describe('MaggamworkblousesComponent', () => {
  let component: MaggamworkblousesComponent;
  let fixture: ComponentFixture<MaggamworkblousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaggamworkblousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaggamworkblousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
