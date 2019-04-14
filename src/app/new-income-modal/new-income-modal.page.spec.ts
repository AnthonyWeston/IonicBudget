import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncomeModalPage } from './new-income-modal.page';

describe('NewIncomeModalPage', () => {
  let component: NewIncomeModalPage;
  let fixture: ComponentFixture<NewIncomeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIncomeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncomeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
