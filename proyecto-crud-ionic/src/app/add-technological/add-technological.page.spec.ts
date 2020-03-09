import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnologicalPage } from './add-technological.page';

describe('AddTechnologicalPage', () => {
  let component: AddTechnologicalPage;
  let fixture: ComponentFixture<AddTechnologicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechnologicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnologicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
