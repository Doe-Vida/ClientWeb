import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XperienceComponent } from './xperience.component';

describe('XperienceComponent', () => {
  let component: XperienceComponent;
  let fixture: ComponentFixture<XperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XperienceComponent]
    });
    fixture = TestBed.createComponent(XperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
