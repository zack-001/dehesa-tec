import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologicalListComponent } from './technological-list.component';

describe('TechnologicalListComponent', () => {
  let component: TechnologicalListComponent;
  let fixture: ComponentFixture<TechnologicalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologicalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
