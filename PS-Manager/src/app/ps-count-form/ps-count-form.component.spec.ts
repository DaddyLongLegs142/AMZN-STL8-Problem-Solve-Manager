import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsCountFormComponent } from './ps-count-form.component';

describe('PsCountFormComponent', () => {
  let component: PsCountFormComponent;
  let fixture: ComponentFixture<PsCountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsCountFormComponent]
    });
    fixture = TestBed.createComponent(PsCountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
