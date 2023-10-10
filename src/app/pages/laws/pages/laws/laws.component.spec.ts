import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsComponent } from './laws.component';

describe('LawsComponent', () => {
  let component: LawsComponent;
  let fixture: ComponentFixture<LawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawsComponent]
    });
    fixture = TestBed.createComponent(LawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
