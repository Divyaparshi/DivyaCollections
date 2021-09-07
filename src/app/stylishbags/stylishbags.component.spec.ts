import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishbagsComponent } from './stylishbags.component';

describe('StylishbagsComponent', () => {
  let component: StylishbagsComponent;
  let fixture: ComponentFixture<StylishbagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishbagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishbagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
