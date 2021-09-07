import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PujasilveritemsComponent } from './pujasilveritems.component';

describe('PujasilveritemsComponent', () => {
  let component: PujasilveritemsComponent;
  let fixture: ComponentFixture<PujasilveritemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PujasilveritemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PujasilveritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
