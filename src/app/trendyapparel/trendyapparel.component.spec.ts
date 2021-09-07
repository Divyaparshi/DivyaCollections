import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyapparelComponent } from './trendyapparel.component';

describe('TrendyapparelComponent', () => {
  let component: TrendyapparelComponent;
  let fixture: ComponentFixture<TrendyapparelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendyapparelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendyapparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
