import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpenseModalPage } from './new-expense-modal.page';

describe('NewExpenseModalPage', () => {
  let component: NewExpenseModalPage;
  let fixture: ComponentFixture<NewExpenseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExpenseModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExpenseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
