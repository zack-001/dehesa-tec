import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnologicalPage } from './view-technological.page';

describe('ViewTechnologicalPage', () => {
  let component: ViewTechnologicalPage;
  let fixture: ComponentFixture<ViewTechnologicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTechnologicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTechnologicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
