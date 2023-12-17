import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFacesnapComponent } from './single-facesnap.component';

describe('SingleFacesnapComponent', () => {
  let component: SingleFacesnapComponent;
  let fixture: ComponentFixture<SingleFacesnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleFacesnapComponent]
    });
    fixture = TestBed.createComponent(SingleFacesnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
