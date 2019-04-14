import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSummaryPage } from './budget-summary.page';

describe('BudgetSummaryPage', () => {
  let component: BudgetSummaryPage;
  let fixture: ComponentFixture<BudgetSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
