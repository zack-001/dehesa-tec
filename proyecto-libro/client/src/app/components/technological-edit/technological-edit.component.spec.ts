import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologicalEditComponent } from './technological-edit.component';

describe('TechnologicalEditComponent', () => {
  let component: TechnologicalEditComponent;
  let fixture: ComponentFixture<TechnologicalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologicalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologicalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
