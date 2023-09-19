import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSLinksComponent } from './ps-links.component';

describe('PSLinksComponent', () => {
  let component: PSLinksComponent;
  let fixture: ComponentFixture<PSLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PSLinksComponent]
    });
    fixture = TestBed.createComponent(PSLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
