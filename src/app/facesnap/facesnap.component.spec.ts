import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesnapComponent } from './facesnap.component';

describe('FacesnapComponent', () => {
  let component: FacesnapComponent;
  let fixture: ComponentFixture<FacesnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacesnapComponent]
    });
    fixture = TestBed.createComponent(FacesnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
